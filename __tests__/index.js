const index = require('../src');

it('exports the list of available cities', () => {
    const cities = index.cities;

    expect(Array.isArray(cities)).toBe(true);
    expect(cities.length).toBeGreaterThan(5);
});

it('scraps the Berlin apartment list and its apartments', () => {
    const promise = index.scrapCity('Berlin');
    expect(promise instanceof Promise).toBe(true);

    return promise.then((apartments) => {
        expect(Array.isArray(apartments)).toBe(true);
        expect(apartments.length).toBeGreaterThan(20);

        apartments.forEach((apartment) => {
            expect(apartment.description).toBeTruthy();
            expect(apartment.area).toBeGreaterThan(10);
            expect(apartment.rentTotal).toBeGreaterThan(100);
            expect(apartment.rentBase).toBeGreaterThan(100);
        });
    });
});
