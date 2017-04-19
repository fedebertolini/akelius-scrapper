const fs      = require( 'fs' );
const path    = require( 'path' );
const scraper = require( '../../src/scrapers/apartment' );

it( 'scraps the apartment1 page', () => {
  const file      = fs.readFileSync( `${process.cwd()}/__tests__/scrapers/pages/apartment1.html` );
  const apartment = scraper.scrap( file );

  expect( apartment.description )
    .toBe( 'Erstbezug nach Modernisierung mit neuer offener Einbauküche und neuem Duschbad' );

  expect( apartment.area ).toBe( 28.8 );
  expect( apartment.availableFrom ).toEqual( new Date( '2017-02-16' ) );
  expect( apartment.rentTotal ).toBe( 720 );
  expect( apartment.rentBase ).toBe( 650 );
} );

it( 'scraps the apartment2 page', () => {
  const file      = fs.readFileSync( `${process.cwd()}/__tests__/scrapers/pages/apartment2.html` );
  const apartment = scraper.scrap( file );

  expect( apartment.description ).toBe( 'Erstbezug nach umfassender Modernisierung!' );

  expect( apartment.area ).toBe( 76.93 );
  expect( apartment.availableFrom ).toEqual( new Date( '2017-02-01' ) );
  expect( apartment.rentTotal ).toBe( 1350 );
  expect( apartment.rentBase ).toBe( 1150 );
  expect( apartment.rooms ).toBe( 2 );
} );

it( 'scraps the apartment photos page', () => {
  const file      = fs.readFileSync( path.resolve('__tests__', 'scrapers', 'pages', 'fotos.html') );
  const apartment = scraper.scrapPhotos( file );

  expect( apartment.photos.length ).toBe( 11 );
  expect( apartment.photos ).toContain('http://media-assets.akelius.com/fotoweb/cache/5013/Assets/4017/0019/4017_0019_-_-_2017-04-10_-_Marketing_-_06340170019-4017-0019-02-sfl-eg-rechts_lettings.t58eb600c.m600.x44f09ca4.jpg');

} );
