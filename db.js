const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require('mongoose');
const User = require('./user.js');
const uri = "mongodb+srv://georgem:GyT.Fawk-_df7_.@movies.uischwp.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    
    console.log('connecting mongoose server');
    await mongoose.connect(
        uri,
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
    console.log('mongoose connected');

    const newUser = new User({
        username: "admin",
        hash: "fuck",
        salt: "shit",
        email: "dick",
        createdAt: new Date(),
    });

    await newUser.save();

    console.log('successfully created user.');
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);