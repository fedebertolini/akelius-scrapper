# akelius-scraper
Web scraper for the [Akelius apartment listing](https://www.akelius.de/en/search/apartments).

## Installation
```
npm install akelius-scraper --save
```

## Usage

```
const akeliusScraper = require('akelius-scraper');
```

#### Cities
You can get the available cities:
```
akeliusScraper.cities
```

Output:
```
[ 'Berlin',
  'Hamburg',
  'Düsseldorf',
  'Köln',
  'Wiesbaden',
  'Frankfurt',
  'Mainz',
  'München' ]
```

#### Scrap city
You can get all listed apartments for a specific city:
```
akeliusScraper.scrapCity('Düsseldorf')
```
This will return a `Promise` that resolves in an array of apartment objects.

Output:
```
[
          {
              "address": "Urbanstr. 68",
              "postalCode": "10967",
              "city": "Berlin",
              "url": "https://www.akelius.de/en/search/apartments/osten/berlin/2.7539.7",
              "id": "2.7539.7",
              "description": "Modernisiert, drei Zimmer mit Einbauküche, Wannen-Dusch-Bad und Balkon",
              "rentTotal": 1500,
              "area": 84.07,
              "availableFrom": "2017-05-01T00:00:00.000Z",
              "rentBase": 1280,
              "rooms": 3,
              "images": [
                  "http://media-assets.akelius.com/fotoweb/cache/5013/Assets/7539/0007/7539_0007_-_-_2017-04-18_-_Marketing_-_00275390007-1_lettings.t58f5fb69.m600.x4ac9c20a.jpg",
                  "http://media-assets.akelius.com/fotoweb/cache/5013/Assets/7539/0007/7539_0007_-_-_2017-04-18_-_Marketing_-_00275390007-15_lettings.t58f5fb6b.m600.xdd2ef1b7.jpg",
                  "http://media-assets.akelius.com/fotoweb/cache/5013/Assets/7539/0007/7539_0007_-_-_2017-04-18_-_Marketing_-_00275390007-8_lettings.t58f5fb73.m600.xaebd8ff4.jpg",
                  "http://media-assets.akelius.com/fotoweb/cache/5013/Assets/7539/0007/7539_0007_-_-_2017-04-18_-_Marketing_-_00275390007-16_lettings.t58f5fb6d.m600.x6f0187d5.jpg"
              ]
          },
          {
              "address": "Dernburgstr. 29a",
              "postalCode": "14057",
              "city": "Berlin",
              "url": "https://www.akelius.de/en/search/apartments/osten/berlin/2.7023.165",
              "id": "2.7023.165",
              "description": "Wohnung mit Einbauküche und Balkon am Lietzensee.",
              "rentTotal": 900,
              "area": 50.88,
              "availableFrom": "2017-05-01T00:00:00.000Z",
              "rentBase": 780,
              "rooms": 2,
              "images": [
                  "http://media-assets.akelius.com/fotoweb/cache/5013/Assets/7023/0165/7023_0165_-_-_2017-04-20_-_Marketing_-_00270230165-aussenansicht-dernburgstr-29-jpg_lettings.t58f83cf2.m600.xe551a6ff.jpg",
                  "http://media-assets.akelius.com/fotoweb/cache/5013/Assets/7023/0165/7023_0165_-_-_2017-04-20_-_Marketing_-_00270230165-5_lettings.t58f83cee.m600.xd2ed38f3.jpg",
                  "http://media-assets.akelius.com/fotoweb/cache/5013/Assets/7023/0165/7023_0165_-_-_2017-04-20_-_Marketing_-_00270230165-6_lettings.t58f83cef.m600.xb6fa4e38.jpg",
                  "http://media-assets.akelius.com/fotoweb/cache/5013/Assets/7023/0165/7023_0165_-_-_2017-04-20_-_Marketing_-_00270230165-4_lettings.t58f83cee.m600.xca47ea97.jpg",
                  "http://media-assets.akelius.com/fotoweb/cache/5013/Assets/7023/0165/7023_0165_-_-_2017-04-20_-_Marketing_-_00270230165-2_lettings.t58f83cec.m600.x02690701.jpg"
              ]
          },
          {
              "address": "Droysenstr. 7",
              "postalCode": "10629",
              "city": "Berlin",
              "url": "https://www.akelius.de/en/search/apartments/osten/berlin/2.7046.1",
              "id": "2.7046.1",
              "description": "Altbauwohnung nahe Kurfürstendamm",
              "rentTotal": 2450,
              "area": 167,
              "availableFrom": "2017-05-01T00:00:00.000Z",
              "rentBase": 2130,
              "rooms": 5,
              "images": [
                  "http://media-assets.akelius.com/fotoweb/cache/5013/Assets/7046/0001/7046_0001_-_-_2017-03-02_-_Marketing_-_00270460001-hausansicht-collage_lettings.t58b80689.m600.x7acf7cba.jpg",
                  "http://media-assets.akelius.com/fotoweb/cache/5013/Assets/7046/0001/7046_0001_-_-_2017-03-02_-_Marketing_-_00270460001-1-wohnkueche_lettings.t58b80683.m600.x709dda13.jpg",
                  "http://media-assets.akelius.com/fotoweb/cache/5013/Assets/7046/0001/7046_0001_-_-_2017-03-02_-_Marketing_-_00270460001-wohnkueche_lettings.t58b8068c.m600.x8cab8ad4.jpg",
                  "http://media-assets.akelius.com/fotoweb/cache/5013/Assets/7046/0001/7046_0001_-_-_2017-03-02_-_Marketing_-_00270460001-wannenbad_lettings.t58b8068a.m600.xd601e7ef.jpg",
                  "http://media-assets.akelius.com/fotoweb/cache/5013/Assets/7046/0001/7046_0001_-_-_2017-03-02_-_Marketing_-_00270460001-duschbad_lettings.t58b80688.m600.xe5584c6c.jpg",
                  "http://media-assets.akelius.com/fotoweb/cache/5013/Assets/7046/0001/7046_0001_-_-_2017-03-02_-_Marketing_-_00270460001-zimmer-mit-balkon_lettings.t58b8068d.m600.xc07dc5b2.jpg",
                  "http://media-assets.akelius.com/fotoweb/cache/5013/Assets/7046/0001/7046_0001_-_-_2017-03-02_-_Marketing_-_00270460001-7_lettings.t58b80687.m600.x5159e269.jpg"
              ]
          }
      ]
```
