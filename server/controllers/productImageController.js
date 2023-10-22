import galleryModel from "../models/galleryModel.js";
import slugify from "slugify";
import multer from "multer";
import express from "express";
const router = express.Router();

import fs from 'fs'
import path from 'path'

 


// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, "./../client/src/images/");
//     },
//     filename: function (req, file, cb) {
//       const uniqueSuffix = Date.now();
//       cb(null, uniqueSuffix + file.originalname);
//     },
//   });
  
//   const upload = multer({ storage: storage });
//   console.log(upload)
// //   export const uploadImageController = upload.single("image"),async (req, res) => {
//   router.post("/upload-image", upload.single("image"), async (req, res) => {
//   console.log(req.body)
//   console.log(req.file)

//     const imageName = req.file.filename;
  
//     try {
//       await new galleryModel({ image: imageName }).save();
//       res.json({ status: "ok" });
//     } catch (error) {
//       res.json({ status: error });
//     }
//   });
  
    
  
//   router.get("/get-image", async (req, res) => {
//     try {
//      galleryModel.find({}).then((data) => {
     
//         res.send({ status: "ok", data: data });
//       });
//     } catch (error) {
//       res.json({ status: error });
//     }
//   });

  export default router;