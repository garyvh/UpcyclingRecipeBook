
require('dotenv').config();
const express = require('express') 
const cors = require('cors') 
const port = 3000
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

const recepieList = [
    {
      name: 'Mason Jar Lanterns',
      link: 'https://www.makelifelovely.com/diy-mason-jar-lanterns/'
    },
    {
      name: 'Mason Jar Terrarium',
      link: 'https://www.huffpost.com/entry/diy-mason-jar-terrarium-t_b_8210924'
    },
    {
      name: 'Wine Bottle Lights',
      link: 'https://diyprojects.com/create-wine-bottle-lights/'
    }
  ]

  //Get method to retrieve a recipe
  app.get('/recipeList/retrieve/:itemname', async (req, res) => {
    try {
      await client.connect()
      const collection = client.db(process.env.dbName).collection(process.env.dbCollectionName)
      
      // Create a text index on the 'name' field
      //await collection.createIndex({ name: "text" });
  
      const result = await collection.find(
       {title: req.params.itemname  }, 
        { projection: { _id: 0 } }
      ).toArray()
      console.log(result)
      res.status(200).json(result)
  
    } catch (error) {
      console.log(error)
      res.sendStatus(500)
  
    } finally {
      setTimeout(() => {client.close()}, 1500)    }
  });

// Start Express server to listen for API connections
app.listen(port, () => console.log(`API listening at http://localhost:${port}/`))
