const express = require('express');
const{
   createCouponController,
   couponControlller,
   checkCouponController,
   deleteCouponController
  
} =require("./../../controllers/couponController.js")



const router = express.Router();
 router.post('/create-coupon',createCouponController)
 router.post('/check-coupon',checkCouponController)
 router.get('/get-coupon',couponControlller)


 //delete coupon
 router.delete(
   "/delete-coupon/:id",
   deleteCouponController
 );
 
 module.exports = router;