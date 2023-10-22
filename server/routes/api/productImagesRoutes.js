import express from "express";
const router = express.Router();
import mongoose from "mongoose";
import multer from "multer";
import galleryModel from "../../models/galleryModel.js";
// const Images=mongoose.model("Gallery")

import fs from 'fs'
import path from 'path'

// import {
//     uploadImageController
//   } from "../../../controllers/productImageController.js";


// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./../server/uploads/");
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now();
//     // cb(null, uniqueSuffix + file.originalname);
//     cb(null, file.fieldname + '-' + Date.now())
//   },
// });

// const upload = multer({ storage: storage });
// console.log(upload)

// router.post("/upload-image", upload.single("image"), async (req, res) => {
//   obj={
//     image: {
//       data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
//       contentType: 'image/png'
//   }
//   }
  
//   const imageName = req.file.filename;

//   try {
//     await new galleryModel(image).save();
//     res.json({ status: "ok" });
//   } catch (error) {
//     res.json({ status: error });
//   }
// });

  

// router.get("/get-image", async (req, res) => {
//   try {
//     Images.find({}).then((data) => {
   
//       res.send({ status: "ok", data: data });
//     });
//   } catch (error) {
//     res.json({ status: error });
//   }
// });

// router.post("/upload-image",uploadImageController)

export default router;