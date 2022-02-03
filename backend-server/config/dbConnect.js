const { MongoClient } = require('mongodb');

// Connection URL
const url = `mongodb+srv://graphql:graphql@cluster0.fmc86.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(url);

// Database Name
const dbName = 'simpleGraphQL';

    client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const musicCollection = db.collection('newCollections');


module.exports = { musicCollection }

