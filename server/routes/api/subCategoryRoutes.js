const express = require('express');

const {
  subCategoryControlller,
  createSubCategoryController,
  deleteSubCategoryController,
  singleSubCategoryController,
  updateSubCategoryController,
  subslugCategoryControlller,
  productSubCategoryControlller,
  catSubCatgeoryController,
  produuctFilterController
} = require("./../../controllers/subCategoryController.js");

const router = express.Router();

//routes
// create category
router.post(
  "/create-subcategory",
    createSubCategoryController
);

//update category
router.put(
  "/update-subcategory/:id",
   updateSubCategoryController
);

// getALl category
router.get("/get-subcategory", subCategoryControlller);

router.get("/get-subslugcategory", subslugCategoryControlller);

router.get("/getproductsubcategory", productSubCategoryControlller);
// //single category
router.get("/single-subcategory/:slug", singleSubCategoryController);

//delete category
router.delete(
  "/delete-subcategory/:id",
   deleteSubCategoryController
);


//access data from catgroy
router.get("/get-cat-subcategory",catSubCatgeoryController)

router.post("/productFilter", produuctFilterController)
module.exports = router;
