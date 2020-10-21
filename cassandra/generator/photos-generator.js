const fs = require('fs');
const faker = require('faker');
const csvWriter = require('csv-write-stream');
const writer = csvWriter();

const { restaurants } = require('../../data/restaurants');

const randomize = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min)
}

const getRandomPhotoUrl = () => {
  const bucketUrl = 'https://toptable-gallery.s3-us-west-1.amazonaws.com/';
  const photoEndpoint = randomize(1, 1000).toString();
  return `${bucketUrl}${photoEndpoint}.jpg`;
};

const generatePhotos = () => {
  // node --max-old-space-size=8192
  writer.pipe(fs.createWriteStream('postgres/csv/photos.csv'));
  for (var i = 0; i < 5000000; i++) {
    if (i % 500000 === 0) {
      console.log(`${i / 5000000 * 100}% done`)
    }
    writer.write({
      restaurant_id: randomize(1, restaurants.length),
      category_id: randomize(1, 7),
      description: faker.lorem.sentence(),
      date: faker.date.past(5),
      url_path: getRandomPhotoUrl(),
      user_id: randomize(1, 100000),
    })
  }
  writer.end();
  console.log('Seeded PostgreSQL with 5000000 photos!');
}

generatePhotos();

// module.exports = generatePhotos;
