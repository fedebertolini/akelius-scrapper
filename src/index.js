const request          = require( 'request' );
const listScraper      = require( './scrapers/list' );
const apartmentScraper = require( './scrapers/apartment' );
const cityPaths        = require( './cityPaths.json' );
const host             = 'https://www.akelius.de';
const basePathname     = '/en/search/apartments/';
const photosPageName   = 'fotos'

const requestPromise = url => {
  return new Promise( ( resolve, reject ) => {
    request( url, ( error, response, body ) => {

      if ( error ) reject( error );
      if ( response.statusCode !== 200 ) reject( `Invalid response: ${response}` );

      resolve( body );
    } );
  } )
}

const scrapApartment = ( apartment, includePhotos = true ) => {
  const url               = host + apartment.url;
  const photosPageUrl     = `${url}/${photosPageName}`;
  const apartmentPromises = [];

  apartmentPromises.push( requestPromise( url ) );

  if ( includePhotos ) {
    apartmentPromises.push( requestPromise( photosPageUrl ) );
  }

  return Promise
    .all( apartmentPromises )
    .then( ( [ infoPage, photosPage ] ) => {
      const info   = apartmentScraper.scrap( infoPage );
      const photos = includePhotos ? apartmentScraper.scrapPhotos( photosPage ) : { photosPageUrl };

      return Object.assign( apartment, { url }, info, photos );
    } );
};

const scrapCity = ( city, includePhotos ) => new Promise( ( resolve, reject ) => {
  const cityPath = cityPaths[ city ];
  if ( !cityPath ) {
    reject( `Invalid city: ${city}` );
  }
  const url = `${host}${basePathname}${cityPath}/list`;

  request( url, ( error, response, body ) => {
    if ( error ) {
      reject( error );
    }
    if ( response.statusCode !== 200 ) {
      reject( `Invalid response: ${response}` );
    }
    const apartments    = listScraper.scrap( body );
    const scrapPromises = apartments.map( apartment => scrapApartment( apartment, includePhotos ) );
    resolve( Promise.all( scrapPromises ) );
  } );
} );

exports.cities    = Object.keys( cityPaths );
exports.scrapCity = scrapCity;
