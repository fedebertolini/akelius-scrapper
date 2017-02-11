const cheerio = require('cheerio');

const scrapApartment = ($apartmentNode) => {
    const apartment = {};

    const title = $apartmentNode.find('h3').html().split('<br>');
    apartment.street = title[0].trim();
    apartment.name = apartment.street;
    apartment.postalCode = title[1].trim();

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
