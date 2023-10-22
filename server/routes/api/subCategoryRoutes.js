import express from "express";

import {
  subCategoryControlller,
  createSubCategoryController,
  deleteSubCategoryController,
  singleSubCategoryController,
  updateSubCategoryController,
} from "./../../controllers/subCategoryController.js";

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

// //single category
router.get("/single-subcategory/:slug", singleSubCategoryController);

//delete category
router.delete(
  "/delete-subcategory/:id",
   deleteSubCategoryController
);

export default router;
