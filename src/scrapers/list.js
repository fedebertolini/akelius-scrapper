const cheerio = require('cheerio');

exports.scrap = (page) => {
    const $ = cheerio.load(page, {
        decodeEntities: false,
        normalizeWhitespace: true,
    });

    return $('figure').map((index, apartment) => scrapApartment($(apartment))).get();
};

const scrapApartment = ($apartmentNode) => {
    const apartment = {};

    const title = $apartmentNode.find('h3').html().split('<br>');
    apartment.name = apartment.street = title[0].trim();
    apartment.postalCode = title[1].trim();

    apartment.url = $apartmentNode.find('a').attr('href');

    return apartment;
};
