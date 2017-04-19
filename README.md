# akelius-scraper
Web scraper for the [Akelius apartment listing](https://www.akelius.de/en/search/apartments).

## Installation
```sh
npm install akelius-scraper --save
```

## Usage

```js
const akeliusScraper = require('akelius-scraper');
```

#### Cities
You can get the available cities:
```js
akeliusScraper.cities
```

Output:
```js
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
##### You can get all listed apartments for a specific city (including apartments photos):
```js
akeliusScraper.scrapCity('Düsseldorf')
```
This will return a `Promise` that resolves in an array of apartment objects.

Output:
```js
[
  {
    address:'Flügelstr. 2',
    postalCode:'40227',
    city:'Düsseldorf',
    url:'https://www.akelius.de/en/search/apartments/westen/düsseldorf/1.7274.5',
    description:'hellsanierte Dreizimmerwohnung mit Balkon und Einbauküche',
    rentTotal:1090,
    area:76.34,
    availableFrom:2017-02-01T00:00:00.000Z,
    rentBase:900,
    "photos": [
          "http://media-assets.akelius.com/fotoweb/cache/5013/Assets/7539/0007/7539_0007_-_-_2017-04-18_-_Marketing_-_00275390007-1_lettings.t58f5fb69.m600.x4ac9c20a.jpg",
          "http://media-assets.akelius.com/fotoweb/cache/5013/Assets/7539/0007/7539_0007_-_-_2017-04-18_-_Marketing_-_00275390007-15_lettings.t58f5fb6b.m600.xdd2ef1b7.jpg",
          "http://media-assets.akelius.com/fotoweb/cache/5013/Assets/7539/0007/7539_0007_-_-_2017-04-18_-_Marketing_-_00275390007-8_lettings.t58f5fb73.m600.xaebd8ff4.jpg",
          "http://media-assets.akelius.com/fotoweb/cache/5013/Assets/7539/0007/7539_0007_-_-_2017-04-18_-_Marketing_-_00275390007-16_lettings.t58f5fb6d.m600.x6f0187d5.jpg",
          "http://media-assets.akelius.com/fotoweb/cache/5013/Assets/7539/0007/7539_0007_-_-_2017-04-18_-_Marketing_-_00275390007-19_lettings.t58f5fb6e.m600.x6c8bd62b.jpg",
          "http://media-assets.akelius.com/fotoweb/cache/5013/Assets/7539/0007/7539_0007_-_-_2017-04-18_-_Marketing_-_00275390007-23_lettings.t58f5fb72.m600.xa1eed372.jpg",
          "http://media-assets.akelius.com/fotoweb/cache/5013/Assets/7539/0007/7539_0007_-_-_2017-04-18_-_Marketing_-_00275390007-21_lettings.t58f5fb70.m600.x50db8a3f.jpg",
          "http://media-assets.akelius.com/fotoweb/cache/5013/Assets/7539/0007/7539_0007_-_-_2017-04-18_-_Marketing_-_00275390007-1_lettings_1.t58f5fb6a.m600.xb9541381.jpg",
          "http://media-assets.akelius.com/fotoweb/cache/5013/Assets/7539/0007/7539_0007_Apartment_Living%20Room%205_2016-01_-_Marketing_-_-_Landscape.t57cfa6e1.m600.x4c3ada71.jpg"
        ]
  },
  {
    address:'Münsterstraße 44',
    postalCode:'40476',
    city:'Düsseldorf',
    url:'https://www.akelius.de/en/search/apartments/westen/düsseldorf/55.7565.258',
    description:'hellsanierte Erdgeschosswohnung mit Einbauküche',
    rentTotal:890,
    area:55,
    availableFrom:2017-02-16T00:00:00.000Z,
    rentBase:740,
    "photos": [
          "http://media-assets.akelius.com/fotoweb/cache/5013/Assets/7046/0001/7046_0001_-_-_2017-03-02_-_Marketing_-_00270460001-hausansicht-collage_lettings.t58b80689.m600.x7acf7cba.jpg",
          "http://media-assets.akelius.com/fotoweb/cache/5013/Assets/7046/0001/7046_0001_-_-_2017-03-02_-_Marketing_-_00270460001-1-wohnkueche_lettings.t58b80683.m600.x709dda13.jpg",
          "http://media-assets.akelius.com/fotoweb/cache/5013/Assets/7046/0001/7046_0001_-_-_2017-03-02_-_Marketing_-_00270460001-wohnkueche_lettings.t58b8068c.m600.x8cab8ad4.jpg",
          "http://media-assets.akelius.com/fotoweb/cache/5013/Assets/7046/0001/7046_0001_-_-_2017-03-02_-_Marketing_-_00270460001-wannenbad_lettings.t58b8068a.m600.xd601e7ef.jpg",
          "http://media-assets.akelius.com/fotoweb/cache/5013/Assets/7046/0001/7046_0001_-_-_2017-03-02_-_Marketing_-_00270460001-duschbad_lettings.t58b80688.m600.xe5584c6c.jpg",
          "http://media-assets.akelius.com/fotoweb/cache/5013/Assets/7046/0001/7046_0001_-_-_2017-03-02_-_Marketing_-_00270460001-zimmer-mit-balkon_lettings.t58b8068d.m600.xc07dc5b2.jpg",
          "http://media-assets.akelius.com/fotoweb/cache/5013/Assets/7046/0001/7046_0001_-_-_2017-03-02_-_Marketing_-_00270460001-7_lettings.t58b80687.m600.x5159e269.jpg",
          "http://media-assets.akelius.com/fotoweb/cache/5013/Assets/7046/0001/7046_0001_-_-_2017-03-02_-_Marketing_-_00270460001-6_lettings.t58b80686.m600.xc47bcdef.jpg",
          "http://media-assets.akelius.com/fotoweb/cache/5013/Assets/7046/0001/7046_0001_-_-_2017-03-02_-_Marketing_-_00270460001-4_lettings.t58b80684.m600.x354e94a2.jpg",
          "http://media-assets.akelius.com/fotoweb/cache/5013/Assets/7046/0001/7046_0001_-_-_2017-03-02_-_Marketing_-_00270460001-5_lettings.t58b80685.m600.xa06cbb24.jpg",
          "http://media-assets.akelius.com/fotoweb/cache/5013/Assets/7046/0001/7046_0001_-_-_2017-04-11_-_Marketing_-_00270460001-flur_lettings.t58ecaf5f.m600.x505fc4d3.jpg",
          "http://media-assets.akelius.com/fotoweb/cache/5013/Assets/7046/0001/7046_0001_-_-_2017-03-02_-_Marketing_-_00270460001-we-01-droysenstr-7-eg-rechts_lettings.t58b8068b.m600.xc61df146.jpg",
          "http://media-assets.akelius.com/fotoweb/cache/5013/Assets/7046/0001/7046_0001_Apartment_Living%20Room%202_2012-01_-_Marketing_-_Droysenstr.%207_Portrait.t57d0f0f1.m600.xc617f514.jpg"
        ]
  },
  {
    address:'Rethelstraße 99',
    postalCode:'40237',
    city:'Düsseldorf',
    url:'https://www.akelius.de/en/search/apartments/westen/düsseldorf/1.7507.8',
    description:'hellsaniertes Appartement mit Balkon und Einbauküche',
    rentTotal:710,
    area:48.2,
    availableFrom:2017-02-16T00:00:00.000Z,
    rentBase:620,
    "photos": [
          "http://media-assets.akelius.com/fotoweb/cache/5013/Assets/7079/0028/7079_0028_-_-_2017-04-19_-_Marketing_-_00270790028-31-jpg_lettings.t58f7053f.m600.xde462fa1.jpg",
          "http://media-assets.akelius.com/fotoweb/cache/5013/Assets/7079/0028/7079_0028_-_-_2017-04-19_-_Marketing_-_00270790028-10_lettings.t58f70536.m600.xf415c78b.jpg",
          "http://media-assets.akelius.com/fotoweb/cache/5013/Assets/7079/0028/7079_0028_-_-_2017-04-19_-_Marketing_-_00270790028-12_lettings.t58f70689.m600.x84859f01.jpg",
          "http://media-assets.akelius.com/fotoweb/cache/5013/Assets/7079/0028/7079_0028_-_-_2017-04-18_-_Marketing_-_00270790028-27_lettings.t58f613d2.m600.x15942b00.jpg",
          "http://media-assets.akelius.com/fotoweb/cache/5013/Assets/7079/0028/7079_0028_-_-_2017-04-19_-_Marketing_-_00270790028-10_lettings_1.t58f70536.m600.x454cca54.jpg",
          "http://media-assets.akelius.com/fotoweb/cache/5013/Assets/7079/0028/7079_0028_-_-_2017-04-18_-_Marketing_-_00270790028-26_lettings.t58f613d2.m600.x0d3ef964.jpg",
          "http://media-assets.akelius.com/fotoweb/cache/5013/Assets/7079/0028/7079_0028_-_-_2017-04-18_-_Marketing_-_00270790028-30_lettings.t58f613d4.m600.x8fd71b61.jpg",
          "http://media-assets.akelius.com/fotoweb/cache/5013/Assets/7079/0028/7079_0028_-_-_2017-04-18_-_Marketing_-_00270790028-23_lettings.t58f613d0.m600.xb75f9f15.jpg",
          "http://media-assets.akelius.com/fotoweb/cache/5013/Assets/7079/0028/7079_0028_-_-_2017-04-18_-_Marketing_-_00270790028-2_lettings.t58f613cf.m600.x4df89b52.jpg",
          "http://media-assets.akelius.com/fotoweb/cache/5013/Assets/7079/0028/7079_0028_-_-_2017-04-18_-_Marketing_-_00270790028-7_lettings.t58f613d5.m600.xf621e05e.jpg",
          "http://media-assets.akelius.com/fotoweb/cache/5013/Assets/7079/0028/7079_0028_-_-_2017-04-18_-_Marketing_-_00270790028-29_lettings.t58f613d3.m600.x0eb4a89a.jpg",
          "http://media-assets.akelius.com/fotoweb/cache/5013/Assets/7079/0028/7079_0028_-_-_2017-04-18_-_Marketing_-_00270790028-grundriss-d-2_lettings.t58f613d7.m600.xc200edc1.jpg"
        ]
  }
]
```
#### faster scrap (disable photo scraping)

if you want to disable scraping photo (which is expensive as it doubles the requests), you can do so by passing `false` as second argument to `scrapCity` method:

```js
akeliusScraper.scrapCity('Düsseldorf', false)
```
This will return the same promise `Promise` that resolves in an array of apartment objects replacing `photos` array with `photosPageUrl`.

Output:
```js
[
  {
    address:'Flügelstr. 2',
    postalCode:'40227',
    city:'Düsseldorf',
    url:'https://www.akelius.de/en/search/apartments/westen/düsseldorf/1.7274.5',
    description:'hellsanierte Dreizimmerwohnung mit Balkon und Einbauküche',
    rentTotal:1090,
    area:76.34,
    availableFrom:2017-02-01T00:00:00.000Z,
    rentBase:900,
    "photosPageUrl": "https://www.akelius.de/en/search/apartments/westen/düsseldorf/1.7274.5/fotos"
  },
  {
    address:'Münsterstraße 44',
    postalCode:'40476',
    city:'Düsseldorf',
    url:'https://www.akelius.de/en/search/apartments/westen/düsseldorf/55.7565.258',
    description:'hellsanierte Erdgeschosswohnung mit Einbauküche',
    rentTotal:890,
    area:55,
    availableFrom:2017-02-16T00:00:00.000Z,
    rentBase:740,
    "photosPageUrl": "https://www.akelius.de/en/search/apartments/westen/düsseldorf/55.7565.258/fotos"
  },
  {
    address:'Rethelstraße 99',
    postalCode:'40237',
    city:'Düsseldorf',
    url:'https://www.akelius.de/en/search/apartments/westen/düsseldorf/1.7507.8',
    description:'hellsaniertes Appartement mit Balkon und Einbauküche',
    rentTotal:710,
    area:48.2,
    availableFrom:2017-02-16T00:00:00.000Z,
    rentBase:620,
    "photosPageUrl": "https://www.akelius.de/en/search/apartments/westen/düsseldorf/1.7507.8/fotos"
  }
]
```
 

