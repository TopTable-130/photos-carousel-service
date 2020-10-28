const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

const db = require('../database/pg');

app.use('/', bodyParser.json());

// Postgres
// \timing
// before any queries
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

app.get('/api/restaurants/:id/photos?category_id=category_id', (req, res) => {
  const { id } = req.params;
  const { category_id } = req.query;
  db.query('SELECT * FROM photos WHERE restaurant_id = ? AND category_id = ?', [id, category_id])
    .then((res) => {
      res.status(200).send(res);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post('/api/restaurants/photos', (req, res) => {
  const { restaurant_id, category_id, description, date, url_path, user_id } = req.body;
  db.query('INSERT INTO photos (restaurant_id, category_id, description, date, url_path, user_id) values (?)', [[restaurant_id, category_id, description, date, url_path, user_id]])
    .then((res) => {
      res.status(200).send(res);
    })
    .catch((err) => {
      console.log(err);
    });
})
// INSERT INTO photos (restaurant_id, category_id, description, date, url_path, user_id) values (10, 5, 'Sunt aperiam delectus consequatur repellat totam repudiandae.', 'Sat Feb 24 2018 09:41:33 GMT-0800 (Pacific Standard Time)', 'https://toptable-gallery.s3-us-west-1.amazonaws.com/222.jpg', 30333);

app.patch('/api/restaurants/:id/photos/:photo_id', (req, res) => {
  const { id, photo_id } = req.params;
  const results = '';
  const keys = req.body.keys();
  const values = req.body.values();
  for (let i = 0; i < keys.length; i++) {
    if (results === '') {
      results += `${keys[i]} = ${values[i]}`;
      continue;
    }
    results += `, ${keys[i]} = ${values[i]}`;
  }
  // req.body.keys();
  db.query('UPDATE photos set ? WHERE restaurant_id = ? and photo_id = ?', results, id, photo_id)
    .then((res) => {
      res.status(200).send(res);
    })
    .catch((err) => {
      console.log(err);
    });
})
// UPDATE photos SET description = 'Delicious paella meal for two', url_path = 'https://toptable-gallery.s3-us-west-1.amazonaws.com/322.jpg' WHERE restaurant_id = 11 and photo_id = 9999999;

app.delete('/api/restaurants/:id/photos/:photo_id', (req, res) => {
  const { id, photoId } = req.params;
  db.query('DELETE FROM photos WHERE restaurant_id = ? and photo_id = ?', [id, photo_id])
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





