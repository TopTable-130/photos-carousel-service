const { Client } = require('pg');
const fs = require('fs');
const faker = require('faker');
const argv = require('yargs').argv;

const lines = argv.lines || 1000000;
const filename = argv.output || 'posts.csv';
const writeStream = fs.createWriteStream('data.csv');

// specify how many photos per bucket ~

const client = new Client();
;(async () => {
  await client.connect()
  const res = await client.query('SELECT $1::text as message', ['Hello world!'])
  console.log(res.rows[0].message) // Hello world!
  await client.end()
})()

// avoid using faker

const getRandomPhotoUrl = () => {
  const bucketUrl = 'https://hrsf130-tkout-photo-gallery.s3.us-east-2.amazonaws.com/';
  const photoEndpoint = getRandomIntInclusive(1, 40).toString();
  return `${bucketUrl}${photoEndpoint}.png`;
};



