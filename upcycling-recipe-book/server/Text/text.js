require('dotenv').config();
const express = require('express') 
const cors = require('cors') 
const Fuse = require('fuse.js');
const port = 4000
const app = express()

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.dbUserName}:${process.env.dbUserPassword}@${process.env.dbClusterName}.${process.env.dbMongoId}.mongodb.net/?retryWrites=true&w=majority`;

console.log(uri);
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

// for parsing application/json requests
app.use(express.json())
// for parsing application/x-www-form-urlencoded requests
app.use(express.urlencoded({ extended: true }))
// for allowing different domain origins to make requests to this API
app.use(cors())

// middleware function to handle server errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const Fuse = require('fuse.js');

app.get('/recipeList/retrieve/:itemname', async (req, res) => {
  try {
    const itemName = req.params.itemname;

    // Create a $regex search query with the search term
    const regexQuery = {
      $or: [
        { title: { $regex: new RegExp(itemName, 'i') } },
        {
          supplies: {
            $type: 'string',
            $elemMatch: {
              $regex: new RegExp(itemName, 'i')
            }
          }
        }
      ]
    };

    // Retrieve the data from the database
    await client.connect();
    const collection = client.db(process.env.dbName).collection(process.env.dbCollectionName);
    const data = await collection.find(regexQuery, { projection: { _id: 0 } }).toArray();

    // Set options for Fuse.js
    const options = {
      keys: ['title', 'supplies'], // the fields to search in
      threshold: 0.4, // the minimum score required for a result to be considered a match (adjust as needed)
      includeScore: true // include the score in the results
    };

    // Create a new instance of Fuse with the data to be searched
    const fuse = new Fuse(data, options);

    // Search for items that match the query
    const results = fuse.search(itemName);

    // Extract the items from the results (ignoring the scores)
    const items = results.map(result => result.item);

    res.json(items);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});


// Start Express server to listen for API connections
app.listen(port, () => console.log(`API listening at http://localhost:${port}/`))
