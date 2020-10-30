-- PostgreSQL schema
--psql photos_carousel

DROP DATABASE IF EXISTS toptable;
CREATE DATABASE toptable;

-- CREATE SCHEMA photos_carousel;

-- use 'toptable' database
\c toptable;

CREATE TABLE restaurants (
  id SERIAL PRIMARY KEY,
  name varchar(100),
  cuisine text,
  street text,
  city text,
  state text,
  zip_code text
);

CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  name varchar(30)
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  first_name varchar(15),
  last_name varchar(15),
  user_avatar text
);

CREATE TABLE photos (
  photo_id SERIAL PRIMARY KEY,
  restaurant_id int REFERENCES restaurants(id),
  category_id int REFERENCES categories(id),
  description text,
  date text,
  url_path text,
  user_id int REFERENCES users(id)
);
CREATE INDEX photos_id_index ON photos ("restaurant_id");
CREATE INDEX photos_restId_categoryId_index ON photos ("restaurant_id", "category_id");


\COPY restaurants (name, cuisine, street, city, state, zip_code) FROM '/Users/owner/Desktop/Hack Reactor/SDC - TopTable/photos-carousel-service/postgres/csv/restaurants.csv' DELIMITERS ',' CSV header;
\COPY restaurants (name, cuisine, street, city, state, zip_code) FROM '/Users/owner/Desktop/Hack Reactor/SDC - TopTable/photos-carousel-service/postgres/csv/restaurants2.csv' DELIMITERS ',' CSV header;
\COPY categories (name) FROM '/Users/owner/Desktop/Hack Reactor/SDC - TopTable/photos-carousel-service/postgres/csv/categories.csv' DELIMITERS ','CSV header;
\COPY users (first_name, last_name, user_avatar) FROM '/Users/owner/Desktop/Hack Reactor/SDC - TopTable/photos-carousel-service/postgres/csv/users.csv' DELIMITERS ',' CSV header;
\COPY photos (restaurant_id, category_id, description, date, url_path, user_id) FROM '/Users/owner/Desktop/Hack Reactor/SDC - TopTable/photos-carousel-service/postgres/csv/photos.csv' DELIMITERS ',' CSV header;
\COPY photos (restaurant_id, category_id, description, date, url_path, user_id) FROM '/Users/owner/Desktop/Hack Reactor/SDC - TopTable/photos-carousel-service/postgres/csv/photos1.csv' DELIMITERS ',' CSV header;
\COPY photos (restaurant_id, category_id, description, date, url_path, user_id) FROM '/Users/owner/Desktop/Hack Reactor/SDC - TopTable/photos-carousel-service/postgres/csv/photos2.csv' DELIMITERS ',' CSV header;
\COPY photos (restaurant_id, category_id, description, date, url_path, user_id) FROM '/Users/owner/Desktop/Hack Reactor/SDC - TopTable/photos-carousel-service/postgres/csv/photos3.csv' DELIMITERS ',' CSV header;
\COPY photos (restaurant_id, category_id, description, date, url_path, user_id) FROM '/Users/owner/Desktop/Hack Reactor/SDC - TopTable/photos-carousel-service/postgres/csv/photos4.csv' DELIMITERS ',' CSV header;
\COPY photos (restaurant_id, category_id, description, date, url_path, user_id) FROM '/Users/owner/Desktop/Hack Reactor/SDC - TopTable/photos-carousel-service/postgres/csv/photos5.csv' DELIMITERS ',' CSV header;
\COPY photos (restaurant_id, category_id, description, date, url_path, user_id) FROM '/Users/owner/Desktop/Hack Reactor/SDC - TopTable/photos-carousel-service/postgres/csv/photos6.csv' DELIMITERS ',' CSV header;
\COPY photos (restaurant_id, category_id, description, date, url_path, user_id) FROM '/Users/owner/Desktop/Hack Reactor/SDC - TopTable/photos-carousel-service/postgres/csv/photos7.csv' DELIMITERS ',' CSV header;
\COPY photos (restaurant_id, category_id, description, date, url_path, user_id) FROM '/Users/owner/Desktop/Hack Reactor/SDC - TopTable/photos-carousel-service/postgres/csv/photos8.csv' DELIMITERS ',' CSV header;

-- COPY 44999999
-- to allow multiple categories per photo:
  -- join table photos_categories (photo_id, category_id)

-- Import database:
-- psql toptable -U owner <postgres/post_schema.sql
-- Check size of table:
-- SELECT pg_size_pretty( pg_total_relation_size('tablename') );