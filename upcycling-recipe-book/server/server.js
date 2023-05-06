require('dotenv').config();
const express = require('express') 
const cors = require('cors') 
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

//Get method to retrieve a recipe
app.get('/recipeList/retrieve/:itemname', async (req, res) => {
  try {
    const itemName = req.params.itemname;
    const query = {
      $or: [
        { title: { $regex: new RegExp(itemName, 'i') } },
        {
          supplies: {
            $elemMatch: {
              $regex: new RegExp(itemName, 'i')
            }
          }
        },
        {
          supplies: {
            $type: 'string',
            $regex: new RegExp(itemName, 'i')
          }
        }
      ]
    };
    
    await client.connect();
    const collection = client.db(process.env.dbName).collection(process.env.dbCollectionName);

    const results = await collection.find(query, { projection: { _id: 0 } }).limit(10).toArray();

    res.json(results);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Start Express server to listen for API connections
app.listen(port, () => console.log(`API listening at http://localhost:${port}/`))
