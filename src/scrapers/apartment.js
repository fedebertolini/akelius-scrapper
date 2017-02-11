const cheerio = require('cheerio');

const parseArea = (text) => {
    const areaRegex = /(\d*.\d*) ㎡/.exec(text);
    return areaRegex ? parseFloat(areaRegex[1].replace(',', '.')) : null;
};

const parsePrice = (text) => {
    const sanitizedText = text.replace('.', '').replace(',', '.');
    const priceRegex = /(\d+\D?\d*)\s*€/.exec(sanitizedText);
    return priceRegex ? parseFloat(priceRegex[1]) : null;
};

const parseAvailableFrom = (text) => {
    const dateRegex = /^\D+(\d{1,2}\.\d{1,2}\.\d{4})\s*$/.exec(text);
    if (dateRegex) {
        const dateStr = dateRegex[1].split('.').reverse().join('-');
        return new Date(dateStr);
    }
    return null;
};

const parseNumber = (text) => {
    const numberRegex = /(\d+)/.exec(text);
    return numberRegex ? parseInt(numberRegex[1], 10) : null;
};

const parseApartmentSection = (section) => {
    const result = {};
    const rows = section.find('div.text-row');
    for (let i = 0; i < rows.length; i++) {
        const text = rows.eq(i).text();
        if (text.includes('Rent (without heating)')) {
            result.rentBase = parsePrice(text);
        } else if (text.includes('Additional costs')) {
            result.rentAdditionalCosts = parsePrice(text);
        } else if (text.includes('Rooms')) {
            result.rooms = parseNumber(text);
        }
    }
    return result;
};

const scrap = (page) => {
    const $ = cheerio.load(page, {
        decodeEntities: false,
        normalizeWhitespace: true,
    });

    const result = {};

    result.description = $('h2').text();

    $('section > p').each((index, elem) => {
        const text = $(elem).text();

        if (text.includes('㎡')) {
            result.area = parseArea(text);
        } else if (text.includes('Total rent')) {
            result.rentTotal = parsePrice(text);
        } else if (text.includes('Available from')) {
            result.availableFrom = parseAvailableFrom(text);
        }
    });

    $('h3').each((index, elem) => {
        const text = $(elem).text();
        if (text === 'Apartment') {
            const parsedSection = parseApartmentSection($(elem).parent());
            result.rentBase = parsedSection.rentBase;
            result.rentAdditionalCosts = parsedSection.rentAdditionalCosts;
            result.rooms = parsedSection.rooms;

            return false; // break the each loop
        }
        return true;
    });

    if (!result.rentTotal) {
        result.rentTotal = result.rentBase + result.rentAdditionalCosts;
    }

    return result;
};

exports.scrap = scrap;
