import express from "express";

import {
   createColorController,
   colorControlller,
   singleColorController,
   updateColorController,
   deleteColorCOntroller
  
} from "./../../controllers/colorController.js";



const router = express.Router();
 router.post('/create-color',createColorController)

 //getALl color
router.get("/get-color", colorControlller);

//get single color
router.get("/get-single-color/:id",singleColorController)

//update color
router.put(
    "/update-color/:id",
     updateColorController
  );

  //delete category
router.delete(
    "/delete-color/:id",
     deleteColorCOntroller
  );
export default router;