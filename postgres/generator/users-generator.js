const fs = require('fs');
const csvWriter = require('csv-write-stream');
const writer = csvWriter();

const { firsts } = require('../../data/firsts');
const { lasts } = require('../../data/lasts');

const randomize = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min)
};

const getRandomPhotoUrl = () => {
  const bucketUrl = 'https://toptable-users.s3-us-west-1.amazonaws.com/';
  const photoEndpoint = randomize(1, 1070).toString();
  return `${bucketUrl}${photoEndpoint}.jpg`;
};

const generateUsers = () => {
  writer.pipe(fs.createWriteStream('postgres/csv/users.csv'));
  for (var i = 0; i < 2000000; i++) {
    if (i % 200000 === 0) {
      console.log(`${i / 2000000 * 100}% done`)
    }
    writer.write({
      first_name: firsts[randomize(0, firsts.length - 1)],
      last_name: lasts[randomize(0, lasts.length - 1)],
      user_avatar: getRandomPhotoUrl(),
    })
  }
  writer.end();
  console.log('Loaded CSV with 2000000 users!');
};

generateUsers();

// module.exports = generateUsers;
