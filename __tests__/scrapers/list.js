const fs = require('fs');
const scraper = require('../../src/scrapers/list');

it('scraps the Berlin apartment list', () => {
    const file = fs.readFileSync(`${process.cwd()}/__tests__/scrapers/pages/berlin.html`);
    const apartments = scraper.scrap(file);

    expect(apartments.length).toBe(85);

    const firstApartment = apartments[0];
    expect(firstApartment.id).toBe('15.7434.38');
    expect(firstApartment.url).toBe('/en/search/apartments/osten/berlin/15.7434.38');
    expect(firstApartment.address).toBe('Buttmannstraße 17');
    expect(firstApartment.postalCode).toBe('13357');

    apartments.forEach((apartment) => {
        expect(apartment.id).toBeTruthy();
        expect(apartment.url.length).toBeGreaterThan(40);
        expect(apartment.address.length).toBeGreaterThan(3);
        expect(apartment.postalCode.length).toBe(5);
    });
});
