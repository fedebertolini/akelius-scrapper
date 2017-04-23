const cheerio = require('cheerio');

const scrap = (page) => {
    const $ = cheerio.load(page, {
        decodeEntities: false,
        normalizeWhitespace: true,
    });

    return $('.slider-content .image-box').map((i, div) => div.attribs['data-path']).get();
};

exports.scrap = scrap;
