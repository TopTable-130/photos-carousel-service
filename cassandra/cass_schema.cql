-- Cassandra schema

DROP KEYSPACE IF EXISTS toptable;

CREATE KEYSPACE toptable WITH REPLICATION =
  { 'class': 'SimpleStrategy', 'replication_factor' : 1 };

USE toptable;

CREATE TABLE IF NOT EXISTS toptable.restaurants (
  id int,
  rest_name text,
  cuisine text,
  street text,
  city text,
  state text,
  zip_code text,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS toptable.photos_by_restaurant (
  photo_id int,
  rest_name text,
  category_name text,
  description text,
  date text,
  url_path text,
  user_avatar text,
  first_name text,
  last_name text,
  PRIMARY KEY (rest_name, photo_id)
);

CREATE TABLE IF NOT EXISTS toptable.photos_by_category (
  photo_id int,
  rest_name text,
  category_name text,
  description text,
  date text,
  url_path text,
  user_avatar text,
  first_name text,
  last_name text,
  PRIMARY KEY ((rest_name, category_name), photo_id)
);

-- Import keyspace:
-- cqlsh shell
-- From within Photos-carousel-service/database:
-- source 'cass_schema.cql'
-- Increase request timeout to prevent timeout 'Coordinator node timed out waiting for replica nodes' responses'
-- cqlsh --request-timeout=10000



COPY restaurants (id, rest_name, cuisine, street, city, state, zip_code) FROM '/Users/owner/Desktop/Hack Reactor/SDC - TopTable/photos-carousel-service/cassandra/csv/restaurants.csv' WITH DELIMITER =',' AND HEADER=TRUE;
COPY restaurants (id, rest_name, cuisine, street, city, state, zip_code) FROM '/Users/owner/Desktop/Hack Reactor/SDC - TopTable/photos-carousel-service/cassandra/csv/restaurants2.csv' WITH DELIMITER =',' AND HEADER=TRUE;
COPY photos_by_restaurant (photo_id, rest_name, category_name, description, date, url_path, user_avatar, first_name, last_name) FROM '/Users/owner/Desktop/Hack Reactor/SDC - TopTable/photos-carousel-service/cassandra/csv/photos.csv' WITH DELIMITER =',' AND HEADER=TRUE;
COPY photos_by_category (photo_id, rest_name, category_name, description, date, url_path, user_avatar, first_name, last_name) FROM '/Users/owner/Desktop/Hack Reactor/SDC - TopTable/photos-carousel-service/cassandra/csv/photos.csv' WITH DELIMITER =',' AND HEADER=TRUE;

-- nodetool status photos_by_restaurant
-- nodetool cfstats -- toptable.photos_by_restaurant
-- Processed: 44994999 rows; Rate:    3499 rows/s; Avg. rate:    7184 rows/s
-- 44994999 rows imported from 1 files in 1 hour, 44 minutes, and 23.219 seconds (0 skipped).