const express = require('express');
// import { SignIn } from "../../middleware/authMiddleware.js";
const {
  registerController,
  loginController,

  displayUserController,
  updateProfileController
 
  } = require( "../../controllers/authController.js");

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


module.exports = router;