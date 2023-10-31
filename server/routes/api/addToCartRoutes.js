// import express from "express";
const express = require('express');
const {
  addtocartController,
  displayCartController,
  deleteCartController,
  updateCartController
} =require("./../../controllers/addToCartController.js");
// import { sign } from "jsonwebtoken";
// import { SignIn } from "../../middleware/authMiddleware.js";


  //router object
const router = express.Router();

router.post("/cart", addtocartController)

router.get("/display-cart/:id", displayCartController)

router.delete("/cart-delete/:id", deleteCartController)

router.post("/cart-update/:id", updateCartController)

module.exports = router;