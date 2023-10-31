import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect( 'mongodb://127.0.0.1:27017/ecommercenew') ;
    console.log(
      `Conneted To Mongodb Databse ${conn.connection.host}`
    );
  } catch (error) {
    console.log(`Errro in Mongodb ${error}`);
  }
};

export default connectDB;
// var dbconnection = mongoose.createConnection ('uri,uri');

// const mongoose = require('mongoose');

// mongoose.connect(process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/ecommercenew');

// // // module.exports = mongoose.connection;
// var db = mongoose.connection;


//  export default db;