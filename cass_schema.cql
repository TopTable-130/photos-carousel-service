Cassandra schema

DROP KEYSPACE [ IF EXISTS ] toptable

CREATE KEYSPACE toptable WITH replication =
  {‘class’: ‘SimpleStrategy’, ‘replication_factor’ : 3};

CREATE TABLE [IF NOT EXISTS ] restaurants (
  id uuid,
  photo_id uuid,
  name blob,
  restaurant_id int REFERENCES restaurants(id),
  category text,
  description text,
  date text,
  url_path text,
  user_avatar_path text,
  user_id int,
  PRIMARY KEY ((id), photo_id)
  WITH comment = ‘Q6. Find photos by photo id’;
)

cqlsh -f