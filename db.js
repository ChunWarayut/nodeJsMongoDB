var mongojs = require('mongojs');

var databaseUrl = 'chundev_mongojs';
var collections = ['users', 'user_type'];

var connect = mongojs(databaseUrl, collections);

module.exports = {
    connect: connect
};