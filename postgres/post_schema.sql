-- PostgreSQL schema
--psql photos_carousel

DROP DATABASE IF EXISTS toptable;
CREATE DATABASE toptable;

-- CREATE SCHEMA photos_carousel;

-- use 'toptable' database
\c toptable;

CREATE TABLE restaurants (
  id SERIAL PRIMARY KEY,
  name varchar(30),
  cuisine text,
  address text,
);

CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  name varchar(30),
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  first_name varchar(15),
  last_name varchar(15),
  user_avatar text,
);

CREATE TABLE photos (
  photo_id SERIAL PRIMARY KEY,
  restaurant_id int REFERENCES restaurants(id),
  category_id int REFERENCES categories(id),
  description text,
  date text,
  url_path text,
  user_id int REFERENCES users(id),
);

-- to allow multiple categories per photo:
  -- join table photos_categories (photo_id, category_id)

-- Import database:
-- psql toptable -U owner <database/post_schema.sql

COPY restaurants FROM '/Users/owner/Desktop/Hack Reactor/SDC/photos-carousel-service/postgres/csv/restaurants.csv' CSV header;
COPY categories FROM '/Users/owner/Desktop/Hack Reactor/SDC/photos-carousel-service/postgres/csv/categories.csv' CSV header;
COPY users FROM '/Users/owner/Desktop/Hack Reactor/SDC/photos-carousel-service/postgres/csv/users.csv' CSV header;
COPY photos FROM '/Users/owner/Desktop/Hack Reactor/SDC/photos-carousel-service/postgres/csv/photos.csv' CSV header;
