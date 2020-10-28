const fs = require('fs');
const faker = require('faker');
const csvWriter = require('csv-write-stream');
const writer = csvWriter();

const randomize = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min)
}

const getRandomPhotoUrl = () => {
  const bucketUrl = 'https://toptable-gallery.s3-us-west-1.amazonaws.com/';
  const photoEndpoint = randomize(1, 1000).toString();
  return `${bucketUrl}${photoEndpoint}.jpg`;
};

const generatePhotos = () => {
  writer.pipe(fs.createWriteStream('postgres/csv/photos.csv'));
  let numPhotos = 40000000;
  let i = 0;
  const write = () => {
    let keepWriting = true;
    while (i < numPhotos && keepWriting) {
      i += 1;
      if (i >= numPhotos) {
        if (i % 4000000 === 0) {
          console.log(`${i / 40000000 * 100}% done`);
        }
        for (var j = 0; j < 5000000; j++) {
          writer.write({
            restaurant_id: randomize(1, 10000000),
            category_id: randomize(1, 7),
            description: faker.lorem.sentence(),
            date: faker.date.past(5),
            url_path: getRandomPhotoUrl(),
            user_id: randomize(1, 100000),
          });
        }
        console.log('Loaded CSV with 40000000 photos!');
        writer.end();
      } else {
        if (i % 4000000 === 0) {
          console.log(`${i / 40000000 * 100}% done`);
        }
        keepWriting = writer.write({
          restaurant_id: randomize(1, 10000000),
          category_id: randomize(1, 7),
          description: faker.lorem.sentence(),
          date: faker.date.past(5),
          url_path: getRandomPhotoUrl(),
          user_id: randomize(1, 100000),
        });
      }
    }
    if (i < numPhotos) {
      writer.once('drain', write);
    }
  }
  write();
}

generatePhotos();

// COPY 44999999
// const generatePhotos = () => {
//   // node --max-old-space-size=8192
//   writer.pipe(fs.createWriteStream('postgres/csv/photos.csv'));
//   for (var i = 0; i < 5000000; i++) {
//     if (i % 500000 === 0) {
//       console.log(`${i / 5000000 * 100}% done`)
//     }
//     writer.write({
//       restaurant_id: randomize(1, 2000000),
//       category_id: randomize(1, 7),
//       description: faker.lorem.sentence(),
//       date: faker.date.past(5),
//       url_path: getRandomPhotoUrl(),
//       user_id: randomize(1, 100000),
//     })
//   }
//   writer.end();
//   console.log('Seeded PostgreSQL with 5000000 photos!');
//   // second batch
//   writer2.pipe(fs.createWriteStream('postgres/csv/photos1.csv'));
//   for (var i = 0; i < 5000000; i++) {
//     if (i % 500000 === 0) {
//       console.log(`${i / 5000000 * 100}% done`)
//     }
//     writer2.write({
//       restaurant_id: randomize(1, 2000000),
//       category_id: randomize(1, 7),
//       description: faker.lorem.sentence(),
//       date: faker.date.past(5),
//       url_path: getRandomPhotoUrl(),
//       user_id: randomize(1, 100000),
//     })
//   }
//   writer2.end();
//   console.log('Seeded PostgreSQL with 10000000 photos!');
// }

// generatePhotos();
