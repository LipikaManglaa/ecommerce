

const express = require('express');
const path = require('path');
// const routes = require('./routes/index.js');
const cors=require('cors')
const mongoose=require('mongoose')
const multer=require('multer')
const db = require('./config/db');
const routes = require('./routes');
const dotenv=require('dotenv')
const stripe = require("stripe")(process.env.stripeSecretKey);

//configure env
dotenv.config();


//rest object
const app = express();


//middelwares
app.use(cors());
app.use(express.json());


// if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });
// }


app.use(routes);

//PORT
app.use(express.static(path.join(__dirname,'uploads')))
app.use(express.static(path.join(__dirname,'uploads/slider')))

const PORT = process.env.PORT || 4000;




//run listen
app.listen(PORT, () => {
  console.log(
    `Server Running on  on port ${PORT}`
  );
});
