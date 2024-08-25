const express = require('express');
const mongoose = require('mongoose');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const cors = require('cors');
require('dotenv').config(); 

const app = express();
app.use(cors());

// Connessione a MongoDB
mongoose.connect(process.env.MONGO_URI)

  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Configurazione GraphQL
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

// Avvio del server
app.listen(4000, () => {
  console.log('Server running on port 4000');
});
