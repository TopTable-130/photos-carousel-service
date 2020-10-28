const express = require('express');

const db = require('../../postgres/index.js');

module.exports = {
  get: (id, callback) => {
    db.query('SELECT * FROM photos WHERE restaurant_id = $1', [id], (err, res) => ( callback(err, res) ));
  },

  getByCategory: (data, callback) => {
    db.query('SELECT * FROM photos WHERE restaurant_id = $1 AND category_id = $2', data, (err, res) => ( callback(err, res) ));
  },

  post: (data, callback) => {
    db.query('INSERT INTO photos (restaurant_id, category_id, description, date, url_path, user_id) values ($1)', data, (err, res) => ( callback(err, res) ));
  },

  patch: (data, callback) => {
    db.query('UPDATE photos SET $1 WHERE restaurant_id = $2 and photo_id = $3', data, (err, res) => ( callback(err, res) ));
  },

  delete: (data, callback) => {
    db.query('DELETE FROM photos WHERE photo_id = $1', data, (err, res) => ( callback(err, res) ));
  },

};