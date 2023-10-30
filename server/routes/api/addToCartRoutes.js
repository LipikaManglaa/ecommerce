import express from "express";

import {
  addtocartController,
  displayCartController,
  deleteCartController,
  updateCartController
} from "./../../controllers/addToCartController.js";
// import { sign } from "jsonwebtoken";
import { SignIn } from "../../middleware/authMiddleware.js";


  //router object
const router = express.Router();

router.post("/cart", addtocartController)

router.get("/display-cart/:id", displayCartController)

router.delete("/cart-delete/:id", deleteCartController)

router.post("/cart-update/:id", updateCartController)

export default router;