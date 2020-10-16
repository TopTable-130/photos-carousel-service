-- Cassandra schema

DROP KEYSPACE IF EXISTS toptable

CREATE KEYSPACE toptable WITH replication =
  {‘class’: 'NetworkTopologyStrategy', ‘replication_factor’ : 1};

CREATE TABLE IF NOT EXISTS restaurants (
  id uuid,
  rest_name text,
  cuisine text,
  address text,
  PRIMARY KEY (id)
)

CREATE TABLE IF NOT EXISTS photos_by_restaurant (
  photo_id uuid,
  restaurant_id int,
  rest_name text,
  category_name text,
  description text,
  date timeuuid,
  url_path text,
  user_avatar text,
  first_name text,
  last_name text,
  PRIMARY KEY (restaurant_id, photo_id)
)
WITH CLUSTERING ORDER BY (date);

CREATE TABLE IF NOT EXISTS photos_by_category (
  photo_id uuid,
  restaurant_id int,
  rest_name text,
  category_id int,
  category_name text,
  description text,
  date timeuuid,
  url_path text,
  user_avatar text,
  first_name text,
  last_name text,
  PRIMARY KEY ((restaurant_id, category_id), photo_id)
)
WITH CLUSTERING ORDER BY (date);

-- query photos by category? partition
--   PRIMARY KEY ((restaurant_id, category_id), id)

-- display in specific order? by upload date

-- Import keyspace:
-- cqlsh shell
-- From within Photos-carousel-service/database:
-- source 'cass_schema.cql'
