
import express from "express";
const router = express.Router();
import multer from 'multer'
// import apiRoutes from './api'
import apiRoutes from "./api/index.js";

router.use('/api', apiRoutes);


import fs from 'fs'
import path from 'path'

import galleryModel from "../models/galleryModel.js";

import { createController,productImageController } from "../controllers/galleryController.js";
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


router.post("/upload-image", upload.single("image"),createController)


router.get("/get-image", productImageController)


export default router