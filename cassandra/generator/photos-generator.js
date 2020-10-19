const fs = require('fs');
const faker = require('faker');
const csvWriter = require('csv-write-stream');
const writer = csvWriter();

const { restaurants } = require('../../data/restaurants');

const randomize = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min)
}

// specify how many photos per bucket ~
const getRandomPhotoUrl = () => {
  const bucketUrl = 'https://toptable-gallery.s3-us-west-1.amazonaws.com/';
  const photoEndpoint = getRandomIntInclusive(1, 1000).toString();
  return `${bucketUrl}${photoEndpoint}.jpg`;
};

// https://hackreactor-restaurant-images.s3-us-west-2.amazonaws.com/newseed/1a.jpg
// https://hrsf130-tkout-photo-gallery.s3.us-east-2.amazonaws.com/1.png
// npx bulksplash

const generatePhotos () => {
  writer.pipe(fs.createWriteStream('photos.csv'));
  for (var i = 0; i < 100000; i++) {
    i === 1000
      ? console.log('o-o   o-o  o--o o---o ')
        : i === 2000
        ? console.log('o     o     |       /')
          : i === 5000
          ? console.log('|  -o |  -o O-o   -O-
          ')
            : i === 8000
            ? console.log('o   | o   | |     /
            ')
              : i === 10000
              ? console.log('o-o   o-o  o--o o---o
              ')
    writer.write({
      id: i,
      restaurant_id: randomize(1, restaurants.length),
      category_id: randomize(1, 7),
      description: faker.lorem.sentence(),
      date: faker.date.past(5),
      url_path: getRandomPhotoUrl(),
      user_id: randomize(1, 100000),
    })
  }
  writer.end();
  console.log('Seeded Cassandra with 10000 photos!');
}

generatePhotos();

// -- Import csv file to seed database
// psql -U owner -d toptable -c "COPY toptable FROM generator/photos-generator.js" CSV HEADER;