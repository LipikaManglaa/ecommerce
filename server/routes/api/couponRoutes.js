import express from "express";

import {
   createCouponController,
   couponControlller,
   checkCouponController,
   deleteCouponController
  
} from "./../../controllers/couponController.js";



const router = express.Router();
 router.post('/create-coupon',createCouponController)
 router.post('/check-coupon',checkCouponController)
 router.get('/get-coupon',couponControlller)


 //delete coupon
 router.delete(
   "/delete-coupon/:id",
   deleteCouponController
 );
 
 export default router;