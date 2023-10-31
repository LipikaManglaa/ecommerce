const express = require('express');

const {
  createSliderController,SliderVIewController
} = require("./../../controllers/sliderController.js");

  //router object
const router = express.Router();

router.get("/slider-view-image", SliderVIewController)



router.post("/upload-slider-image", createSliderController)


module.exports = router;