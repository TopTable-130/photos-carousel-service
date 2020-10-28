const express = require('express');
const model = require('../model/model');

module.exports = {
  get: (req, res) => {
    const { id } = req.params;
    model.get(id, (err, data) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(data.rows);
      }
    });
  },

  getByCategory: (req, res) => {
    const { id } = req.params;
    const { category_id } = req.query;
    model.getByCategory([id, category_id], (err, data) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(data.rows);
      }
    });
  },

  post: (req, res) => {
    const { restaurant_id, category_id, description, date, url_path, user_id } = params;
    model.post([restaurant_id, category_id, description, date, url_path, user_id], (err, data) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(201).send();
      }
    });
  },

  patch: (req, res) => {
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
    model.patch([results, id, photo_id], (err, data) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(204).send();
      }
    });
  },

  delete: (req, res) => {
    const { id, photoId } = req.params;
    model.delete([id, photo_id], (err, data) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(204).send();
      }
    });
  },

};
