const mongoose = require('mongoose');
require("dotenv").config();


const { DB_CONNECT } = process.env;

const connectToMongo = async () => {
    await mongoose.connect(DB_CONNECT)
    
.then(() => {
    console.log('Connected to MongoDB Gestion Rendez-vous');
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
  
  };

module.exports = connectToMongo


