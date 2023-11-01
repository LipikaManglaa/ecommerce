const express = require('express');

const {
  createAddressController,
  getAddtressController,
 
  } = require("../../controllers/shippingController.js");

  //router object
const router = express.Router();

//routing
//REGISTER || METHOD POST
router.post("/add-address/:userId", createAddressController);
router.get('/display-address', getAddtressController)

module.exports = router;