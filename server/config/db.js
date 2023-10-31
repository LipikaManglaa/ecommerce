import mongoose from "mongoose";




// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.MONGO_URL) ;
//     console.log(
//       `Conneted To Mongodb Databse ${conn.connection.host}`
//     );
//   } catch (error) {
//     console.log(`Errro in Mongodb ${error}`);
//   }
// };

// export default connectDB;


// const mongoose = require('mongoose');

export const connectDB=mongoose.connect(process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/ecommercenew');

// module.exports = mongoose.connection;


export default mongoose.connection;