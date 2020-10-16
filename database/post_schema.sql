-- PostgreSQL schema
--

DROP DATABASE IF EXISTS toptable;

CREATE DATABASE toptable;

-- use 'toptable' database
\c toptable;

-- add constraints to fields***
CREATE TABLE IF NOT EXISTS restaurants (
  id SERIAL PRIMARY KEY,
  name varchar(30),
  cuisine text,
  address text,
)

CREATE TABLE IF NOT EXISTS photos (
  photo_id SERIAL PRIMARY KEY,
  restaurant_id int REFERENCES restaurants(id),
  category_id int REFERENCES categories(id),
  description text,
  date text,
  url_path text,
  user_id int REFERENCES users(id),
)

CREATE TABLE IF NOT EXISTS categories (
  id SERIAL PRIMARY KEY,
  name varchar(30),
)

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  first_name varchar(15),
  last_name varchar(15),
  user_avatar text,
)

-- another option create tuples within categories (to allow multiple categories per photo?)
-- join table photos_categories (photo_id, category_id)

-- Import database:
-- psql postgres < post_schema.sql
-- psql -U owner toptable < post_schema.sql
