import express from "express";

import {
 createProductController,
  productController,
  singleProductController,
  deleteProductController,
  productCatSubCatgeoryController,
  produuctAccesndinOrderController,


  
} from "./../../controllers/productController.js";

const router = express.Router();

router.post(
  "/create-product",
    createProductController
);




//get all products

router.get(
    "/get-all-products",
      productController
  );
  

  //single product
router.get("/single-product/:slug", singleProductController);

//delete category
router.delete(
  "/delete-product/:id",
   deleteProductController
);

router.get('/productCatSub', productCatSubCatgeoryController)

router.get('/productAccendingOrder', produuctAccesndinOrderController)


export default router;