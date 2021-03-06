const cassandra = require('cassandra-driver');

const client = new cassandra.Client({
  contactPoints: ['h1', 'h2'],
  localDataCenter: 'datacenter1',
  keyspace: 'toptable'
});

module.exports = client;