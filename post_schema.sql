-- PostgreSQL schema

DROP DATABASE IF EXISTS toptable;

CREATE DATABASE toptable;

-- use 'toptable' database
\c toptable;

CREATE TABLE IF NOT EXISTS restaurants (
  id SERIAL PRIMARY KEY,
  name text,
)

CREATE TABLE IF NOT EXISTS photos (
  photo_id SERIAL PRIMARY KEY,
  restaurant_id int REFERENCES restaurants(id),
  category text,
  description text,
  date text,
  url_path text,
  user_avatar_path text,
  user_id int,
)

CREATE TABLE IF NOT EXISTS categories (
  id SERIAL PRIMARY KEY,
  name text,
)
