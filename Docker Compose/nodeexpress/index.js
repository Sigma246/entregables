const express = require('express')
const app = express()
const { MongoClient } = require('mongodb');

const url = 'mongodb://database:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'myProject';

async function main() {
 
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('documents');

}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());


app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(8080)