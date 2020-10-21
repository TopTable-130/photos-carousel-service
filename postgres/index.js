const pg = require('pg');
const { Client } = require('pg');

// const restaurants = require('./generator/restaurants-generator');

const db = new Client()
;(async () => {
  await db.connect()
  const res = await db.query('SELECT $1::text as message', ['Hello world!'])
  console.log(res.rows[0].message);
  // Hello world!
  await db.end()
})()

module.exports = db;
