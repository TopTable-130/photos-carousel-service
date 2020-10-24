const pg = require('pg');
const { Client } = require('pg');

// const restaurants = require('./generator/restaurants-generator');

const client = new Client({
  host: 'localhost',
  port: 5432,
  database: 'toptable',
});

client.connect((err) => {
  if (err) {
    console.log('Error! ', err.stack);
  } else {
    console.log('Successfully connected To Postgres');
  }
});

module.exports = client;
