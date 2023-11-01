// import mongoose from "mongoose";

// export const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect( 'mongodb://127.0.0.1:27017/ecommercenew') ;
//     console.log(
//       `Conneted To Mongodb Databse ${conn.connection.host}`
//     );
//   } catch (error) {
//     console.log(`Errro in Mongodb ${error}`);
//   }
// };


// var dbconnection = mongoose.createConnection ('uri,uri');

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/ecommercenew');

mongoose.connection.once("open", () => {
    console.log(
      `You have successfully connected to your mongo database: ${process.env.MONGO_URL}`
    );
  });
 module.exports = mongoose.connection;
