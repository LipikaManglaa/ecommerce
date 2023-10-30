import express from "express";

import {
  createAddressController,
  
 
  } from "../../controllers/shippingController.js";

  //router object
const router = express.Router();

//routing
//REGISTER || METHOD POST
router.post("/add-address/:userId", createAddressController);


export default router;