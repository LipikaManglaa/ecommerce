const express = require('express');

const {
 createProductController,
  productController,
  singleProductController,
  deleteProductController,
  productCatSubCatgeoryController,
  produuctAccesndinOrderController,


  
} =require("./../../controllers/productController.js");

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

module.exports = router;