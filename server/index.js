const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

const db = require('../database/pg');

app.use('/', bodyParser.json());

// Postgres
app.get('/api/restaurants/:id/photos', (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM photos WHERE restaurant_id = ?', [id])
    .then((res) => {
      res.status(200).send(res);
    })
    .catch((err) => {
      console.log(err);
    });

  // (err, data) => {
  //   if (err) {
  //     res.status(400).send(err);
  //   } else {
  //     res.status(200).send(data);
  //   }
  // }
});

app.post('/api/restaurants/:id/photos', (req, res) => {
  const { id } = req.params;
  const { restaurant_id, category_id, description, date, url_path, user_id } = req.body;
  db.query('INSERT INTO photos (restaurant_id, category_id, description, date, url_path, user_id) values (?) WHERE restaurant_id = ?', [[restaurant_id, category_id, description, date, url_path, user_id], id])
    .then((res) => {
      res.status(200).send(res);
    })
    .catch((err) => {
      console.log(err);
    });
})

app.patch('/api/restaurants/:id/photos/:photoId', (req, res) => {
  const { id, photoId } = req.params;
  // req.body.keys();
  db.query('ALTER TABLE photos (?) values (?) WHERE restaurant_id = ? and photo_id = ?', [[restaurant_id, category_id, description, date, url_path, user_id], [restaurant_id, category_id, description, date, url_path, user_id], id, photoId])
    .then((res) => {
      res.status(200).send(res);
    })
    .catch((err) => {
      console.log(err);
    });
})

app.delete('/api/restaurants/:id/photos/:photoId', (req, res) => {
  const { id, photoId } = req.params;
  db.query('DELETE FROM photos WHERE restaurant_id = ? and photo_id = ?', [id, photoId])
    .then((res) => {
      res.status(200).send(res);
    })
    .catch((err) => {
      console.log(err);
    });
})

// Cassandra

app.listen(port, () => {
  console.log(`Photos-Gallery App Listening on Port http://localhost:${port}`);
});





