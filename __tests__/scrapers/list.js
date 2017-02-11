const fs = require('fs');
const scraper = require('../../src/scrapers/list');

it('scraps the Berlin apartment list', () => {
    const file = fs.readFileSync(`${process.cwd()}/__tests__/scrapers/pages/berlin.html`);
    const apartments = scraper.scrap(file);

    expect(apartments.length).toBe(85);

    apartments.forEach((apartment) => {
        expect(apartment.url.length).toBeGreaterThan(40);
        expect(apartment.name.length).toBeGreaterThan(3);
        expect(apartment.postalCode.length).toBe(12); // DDDDD Berlin
        expect(apartment.street).toBe(apartment.name);
    });
});
