
import express from "express";
const router = express.Router();
import categoryRoutes from './categoryRoutes.js';
import subCategoryRoutes from './subCategoryRoutes.js';
import productRoutes from './productRoutes.js';
import authRoutes from './authRoutes.js';

import sliderRoutes from './sliderRoutes.js'
import cartRoutes from './addToCartRoutes.js'
import couponRoutes from './couponRoutes.js'
import shippingRoutes from './shippingRoutes.js'
import orderRoutes from './orderRoutes.js'
import multer from 'multer'
import { upload } from "../../middleware/imageuploadMiddleware.js";

router.use('/', cartRoutes)
router.use('/',shippingRoutes)
  
router.use('/',upload.single("image"), productRoutes);

router.use('/',upload.single("image"), subCategoryRoutes);




  const storage1 = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./uploads/slider");
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now();
       cb(null, uniqueSuffix + file.originalname)
    },
  });
  
  const upload1 = multer({ storage: storage1 });



router.use('/', upload.single("image"),categoryRoutes);


router.use('/', authRoutes);

 router.use('/', couponRoutes);
 router.use('/', orderRoutes);

 
 router.use('/',upload1.single("image"),sliderRoutes)

export default router;
