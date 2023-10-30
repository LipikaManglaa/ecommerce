import express from "express";
import { SignIn } from "../../middleware/authMiddleware.js";
import {
  registerController,
  loginController,

  displayUserController,
  updateProfileController
 
  } from "../../controllers/authController.js";

  //router object
const router = express.Router();

//routing
//REGISTER || METHOD POST
router.post("/register", registerController);

//LOGIN || POST
router.post("/login", loginController);

router.get("/display-user",displayUserController)

//update profile
router.put("/profile/:id",  updateProfileController);


export default router;