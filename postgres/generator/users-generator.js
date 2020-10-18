const fs = require('fs');
const csvWriter = require('csv-write-stream');
const writer = csvWriter();

const { firsts, lasts } = require('../data/names');

const randomize = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min)
};

const getRandomPhotoUrl = () => {
  // const bucketUrl = 'https://toptable-users.s3-us-west-1.amazonaws.com/';
  // const photoEndpoint = randomize(1, 40).toString();
  // return `${bucketUrl}${photoEndpoint}.png`;
};

const generateUsers () => {
  writer.pipe(fs.createWriteStream('users.csv'));
  for (var i = 0; i < 10000; i++) {
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
      id: counter++,
      first_name: firsts[randomize(0, firsts.length - 1)];
      last_name: lasts[randomize(0, lasts.length - 1)];
      user_avatar: getRandomPhotoUrl();
    })
  }
  writer.end();
  console.log('Seeded 10000 Users!');
};

generateUsers();
