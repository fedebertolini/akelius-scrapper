const request = require('request');
const listScraper = require('./scrapers/list');
const apartmentScraper = require('./scrapers/apartment');

const host = 'https://www.akelius.de';
const basePathname = '/en/search/apartments/';
const cityPaths = {
    'Berlin': 'osten/berlin',
    'Hamburg': 'norden/hamburg',
    'Düsseldorf': 'westen/dusseldorf',
    'Köln': 'westen/koln',
    'Wiesbaden': 'sud-westen/wiesbaden',
    'Frankfurt': 'sud-westen/frankfurt',
    'Mainz': 'sud-westen/mainz',
    'München': 'suden/munchen',
};

const scrapApartment = (url) => {
    return new Promise((resolve, reject) => {
        request(host + url, (error, response, body) => {
            if (error) {
                reject(error);
            }
            if (response.statusCode !== 200) {
                reject(`Invalid response: ${response}`);
            }
            resolve(apartmentScraper.scrap(body));
        });
    });
};

const scrapCity = (city) => {
    return new Promise((resolve, reject) => {
        const cityPath = cityPaths[city];
        if (!cityPath) {
            reject(`Invalid city: ${city}`);
        }
        const url = `${host}${basePathname}${cityPath}/list`;

        request(url, (error, response, body) => {
            if (error) {
                reject(error);
            }
            if (response.statusCode !== 200) {
                reject(`Invalid response: ${response}`);
            }
            const apartments = listScraper.scrap(body);
            const scrapPromises = apartments.map(apartment => scrapApartment(apartment.url));
            resolve(Promise.all(scrapPromises));
        });
    });
};

exports.cities = Object.keys(cityPaths);
exports.scrapApartment = scrapApartment;
exports.scrapCity = scrapCity;
