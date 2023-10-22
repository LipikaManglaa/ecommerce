import express from "express";

import {
  createProductController,
  productController,
  
} from "./../../controllers/productController.js";

const router = express.Router();

//routes
// create category
router.post(
  "/create-product",
    createProductController
);

//get all products
router.get(
    "/get-all-products",
      productController
  );
export default router;