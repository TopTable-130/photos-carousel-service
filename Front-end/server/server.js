/* eslint-disable arrow-body-style */
/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('../database/index.js');

const app = express();
const port = 3003;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, '/../client/dist')));

app.get('/api/restaurants/', (req, res) => {
  db.gatherPhotos()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get('/api/restaurants/photos/:id', (req, res) => {
  db.gatherPhotos(req.params.id)
    .then((response) => {
      const result = response.map((restaurant) => {
        return (restaurant);
      });
      res.status(200).send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(port, () => {
  console.log(`Photos-Gallery App Listening on Port http://localhost:${port}`);
});

module.exports = {
  app,
  express,
};
