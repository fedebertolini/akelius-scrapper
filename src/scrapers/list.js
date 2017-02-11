const cheerio = require('cheerio');

const scrapApartment = ($apartmentNode) => {
    const apartment = {};

    const title = $apartmentNode.find('h3').html().split('<br>');
    apartment.address = title[0].trim();

    const titleSecondRow = title[1].trim().split(' ');
    apartment.postalCode = titleSecondRow[0];
    apartment.city = titleSecondRow[1];

    apartment.url = $apartmentNode.find('a').attr('href');

    return apartment;
};

exports.scrap = (page) => {
    const $ = cheerio.load(page, {
        decodeEntities: false,
        normalizeWhitespace: true,
    });

    return $('figure').map((index, apartment) => scrapApartment($(apartment))).get();
};
