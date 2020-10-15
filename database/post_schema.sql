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
  category_id int REFERENCES categories(id),
  description text,
  date text,
  url_path text,
  user_id int REFERENCES users(id),
)

CREATE TABLE IF NOT EXISTS categories (
  id SERIAL PRIMARY KEY,
  name text,
)

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  first_name text,
  last_name text,
  user_avatar_path text,
)
-- another option create tuples within categories (to allow multiple categories per photo?)

-- Import database:
-- psql -u owner toptable < post_schema.sql
