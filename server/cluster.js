// require('newrelic');
const cors = require('cors');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

const controller = require('./controller/controller');

// change npm start script to server/cluster.js to use

if (cluster.isMaster) {
  for (var i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
} else {
  app.use(cors());
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  // Postgres
  // \timing
  // before any queries
  app.get('/api/restaurants/:id/photos', controller.get);

  app.get('/api/restaurants/:id/photos?category_id=category_id', controller.getByCategory);

  app.post('/api/restaurants/photos', controller.post);
  // INSERT INTO photos (restaurant_id, category_id, description, date, url_path, user_id) values (10, 5, 'Sunt aperiam delectus consequatur repellat totam repudiandae.', 'Sat Feb 24 2018 09:41:33 GMT-0800 (Pacific Standard Time)', 'https://toptable-gallery.s3-us-west-1.amazonaws.com/222.jpg', 30333);

  app.patch('/api/restaurants/:id/photos/:photo_id', controller.patch);
  // UPDATE photos SET description = 'Delicious paella meal for two', url_path = 'https://toptable-gallery.s3-us-west-1.amazonaws.com/322.jpg' WHERE restaurant_id = 11 and photo_id = 9999999;

  app.delete('/api/restaurants/:id/photos/:photo_id', controller.delete);

  app.listen(port, () => {
    console.log(`Photos-Gallery App Listening on Port http://localhost:${port}`);
  });
}
