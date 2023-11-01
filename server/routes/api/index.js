const express = require('express');
// import express from "express";
const router = express.Router();
const categoryRoutes=require('./categoryRoutes.js');
const subCategoryRoutes=require('./subCategoryRoutes.js')
const productRoutes =require('./productRoutes.js');
const authRoutes=require('./authRoutes.js');

const sliderRoutes=require('./sliderRoutes.js')
const cartRoutes= require('./addToCartRoutes.js')
const couponRoutes= require('./couponRoutes.js')
const shippingRoutes= require('./shippingRoutes.js')
const multer=require('multer')
const orderRoutes= require('./orderRoutes.js')




router.use('/', cartRoutes)
router.use('/',shippingRoutes)
router.use('/', authRoutes);

 router.use('/', couponRoutes);
 router.use('/', orderRoutes);
  


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
     cb(null, uniqueSuffix + file.originalname)
  },
});

const upload = multer({ storage: storage });
router.use('/', upload.single("image"),categoryRoutes);

router.use('/',upload.single("image"), subCategoryRoutes);
router.use('/', upload.single("image"),productRoutes);



  // const storage1 = multer.diskStorage({
  //   destination: function (req, file, cb) {
  //     cb(null, "./uploads/slider");
  //   },
  //   filename: function (req, file, cb) {
  //     const uniqueSuffix = Date.now();
  //      cb(null, uniqueSuffix + file.originalname)
  //   },
  // });
  
  // const upload1 = multer({ storage: storage1 });





 router.use('/',upload.single("image"),sliderRoutes)

// export default router;
module.exports = router;   