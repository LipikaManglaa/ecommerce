import express from "express";
import multer from 'multer'
import {
  createSliderController,SliderVIewController
} from "./../../controllers/sliderController.js";

  //router object
const router = express.Router();

router.get("/slider-view-image", SliderVIewController)



// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./uploads");
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now();
//      cb(null, uniqueSuffix + file.originalname)
//   },
// });
// const uploadImage = multer({ storage: storage });

router.post("/upload-slider-image", createSliderController)


export default router;