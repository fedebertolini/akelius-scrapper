const fs = require('fs');
const scraper = require('../../src/scrapers/images');

it('scraps the apartment images', () => {
    const file = fs.readFileSync(`${process.cwd()}/__tests__/scrapers/pages/images.html`);
    const images = scraper.scrap(file);

    expect(images).toEqual([
        'http://media-assets.akelius.com/fotoweb/cache/5013/Assets/7244/0145/7244_0145_-_-_2017-04-18_-_Marketing_-_00272440145-2-jpg_lettings.t58f5fb3a.m600.x8791ab8f.jpg',
        'http://media-assets.akelius.com/fotoweb/cache/5013/Assets/7244/0145/7244_0145_-_-_2017-04-18_-_Marketing_-_00272440145-5-jpg_lettings.t58f5fb3b.m600.x606a4e14.jpg',
        'http://media-assets.akelius.com/fotoweb/cache/5013/Assets/7244/0145/7244_0145_-_-_2017-04-18_-_Marketing_-_00272440145-7_lettings.t58f5fb3d.m600.x261dae89.jpg',
        'http://media-assets.akelius.com/fotoweb/cache/5013/Assets/7244/0145/7244_0145_-_-_2017-04-18_-_Marketing_-_00272440145-6_lettings.t58f5fb3c.m600.x28ef81c1.jpg',
    ]);
});
