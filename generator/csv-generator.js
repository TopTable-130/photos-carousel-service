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
