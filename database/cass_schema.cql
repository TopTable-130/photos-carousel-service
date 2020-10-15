Cassandra schema

DROP KEYSPACE [ IF EXISTS ] toptable

CREATE KEYSPACE toptable WITH replication =
  {‘class’: 'NetworkTopologyStrategy', ‘replication_factor’ : 40};

CREATE TABLE [IF NOT EXISTS ] restaurants (
  id uuid,
  photo_id uuid,
  restaurant_id int,
  rest_name text,
  category_id int,
  category_name text,
  description text,
  date text,
  url_path text,
  user_avatar_path text,
  user_id int,
  first_name text,
  last_name text,
  PRIMARY KEY ((id), photo_id)
  WITH comment = ‘Q6. Find photos by photo id’;
)

-- Import keyspace:
-- cqlsh shell
-- From within Photos-carousel-service/database:
-- source 'cass_schema.cql'
