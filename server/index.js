

const express = require('express');
const path = require('path');
// const routes = require('./routes/index.js');
const cors=require('cors')
const mongoose=require('mongoose')
const multer=require('multer')
const db = require('./config/db');
const routes = require('./routes');
const dotenv=require('dotenv')
// import express from "express";
// import { directoryImport } from 'directory-import';
// import dotenv from "dotenv";
// import connectDB from "./config/db.js";
// import  routes from './routes/index.js'
// import stripe from 'stripe'

// import multer from "multer";
// const router = express.Router();
// import cors from "cors";
// import mongoose from "mongoose";
// import path from 'path'

//configure env
dotenv.config();

//databse config
// connectDB();

//rest object
const app = express();


//middelwares
app.use(cors());
app.use(express.json());


if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });
}


app.use(routes);

//PORT
app.use(express.static('uploads'));
app.use(express.static('uploads/slider'));
const PORT = process.env.PORT || 8080;




//run listen
app.listen(PORT, () => {
  console.log(
    `Server Running on  on port ${PORT}`
  );
});
