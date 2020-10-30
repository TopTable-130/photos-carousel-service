require('newrelic');
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
// SELECT * FROM photos WHERE restaurant_id = 3000000;

  app.get('/api/restaurants/:id/photos?category_id=category_id', controller.getByCategory);
  // SELECT * FROM photos WHERE restaurant_id = 8999999 and category_id = 6;

  app.post('/api/restaurants/photos', controller.post);
  // INSERT INTO photos (restaurant_id, category_id, description, date, url_path, user_id) values (9999999, 5, 'Sunt aperiam delectus consequatur repellat totam repudiandae.', 'Sat Feb 24 2018 09:41:33 GMT-0800 (Pacific Standard Time)', 'https://toptable-gallery.s3-us-west-1.amazonaws.com/333.jpg', 80333);

  app.patch('/api/restaurants/:id/photos/:photo_id', controller.patch);
  // UPDATE photos SET description = 'Delicious paella meal for two', url_path = 'https://toptable-gallery.s3-us-west-1.amazonaws.com/322.jpg' WHERE restaurant_id = 8999999 and photo_id = 39999999;

  app.delete('/api/restaurants/:id/photos/:photo_id', controller.delete);
  // DELETE FROM photos WHERE photo_id = 40234567;

  app.listen(port, () => {
    console.log(`Photos-Gallery App Listening on Port http://localhost:${port}`);
  });
}
