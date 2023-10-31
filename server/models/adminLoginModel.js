// import mongoose from "mongoose";
const { Schema, model } = require('mongoose');

const adminUserSchema = new Schema(
  {
   
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
   
   
  },
  { timestamps: true }
);





const AdminUser=model("AdminUser", adminUserSchema);
module.exports = AdminUser;
