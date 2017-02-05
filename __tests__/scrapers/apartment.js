const fs = require('fs');
const scraper = require('../../src/scrapers/apartment');

it('scraps the apartment1 page', () => {
    const file = fs.readFileSync(`${process.cwd()}/__tests__/scrapers/pages/apartment1.html`);
    const apartment = scraper.scrap(file);

    expect(apartment.description)
        .toBe('Erstbezug nach Modernisierung mit neuer offener Einbauküche und neuem Duschbad');

    expect(apartment.area).toBe(28.8);
    expect(apartment.availableFrom).toEqual(new Date('2017-02-16'));
    expect(apartment.rentTotal).toBe(720);
    expect(apartment.rentBase).toBe(650);
    expect(apartment.rentAdditionalCosts).toBe(70);
});

it('scraps the apartment2 page', () => {
    const file = fs.readFileSync(`${process.cwd()}/__tests__/scrapers/pages/apartment2.html`);
    const apartment = scraper.scrap(file);

    expect(apartment.description).toBe('Erstbezug nach umfassender Modernisierung!');

    expect(apartment.area).toBe(76.93);
    expect(apartment.availableFrom).toEqual(new Date('2017-02-01'));
    expect(apartment.rentTotal).toBe(1350);
    expect(apartment.rentBase).toBe(1150);
    expect(apartment.rentAdditionalCosts).toBe(200);
});
