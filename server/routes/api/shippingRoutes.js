const express = require('express');

const {
  createAddressController,
  
 
  } = require("../../controllers/shippingController.js");

  //router object
const router = express.Router();

//routing
//REGISTER || METHOD POST
router.post("/add-address/:userId", createAddressController);


module.exports = router;