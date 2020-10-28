const pg = require('pg');
const { Client } = require('pg');
const config = require('../config');

// const restaurants = require('./generator/restaurants-generator');

const client = new Client(config);

client.connect((err) => {
  if (err) {
    console.log('Error! ', err.stack);
  } else {
    console.log('Successfully connected To Postgres');
  }
});

module.exports = client;
