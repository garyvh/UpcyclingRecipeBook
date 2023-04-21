const express = require('express') 
const cors = require('cors') 
const port = 3000
const app = express()


const { MongoClient, ServerApiVersion } = require('mongodb');
//const uri = "mongodb+srv://chakerbaloch:5200North@cluster0.tmhmuor.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

//const databaseName = ;
//const collectionName = ;

// for parsing application/json requests
app.use(express.json())
// for parsing application/x-www-form-urlencoded requests
app.use(express.urlencoded({ extended: true }))
// for allowing different domain origins to make requests to this API
app.use(cors())