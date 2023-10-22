import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import  routes from './routes/index.js'
import  controllers from './controllers/productImageController.js'
import multer from "multer";
const router = express.Router();
import cors from "cors";
import mongoose from "mongoose";
import path from 'path'
//configure env
dotenv.config();

//databse config
connectDB();

//rest object
const app = express();

//middelwares
app.use(cors());
app.use(express.json());

app.use(routes);
app.use(controllers)
// app.use(express.static(path.join(__dirname, 'public')));
// const Images=mongoose.model("Gallery")
// //routes

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "../client/src/images/");
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now();
//     cb(null, uniqueSuffix + file.originalname);
//   },
// });

// const upload = multer({ storage: storage });

// router.post("/upload-image", upload.single("image"), async (req, res) => {

//   const imageName = req.file.filename;

//   try {
//     await Images.create({ image: imageName });
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



//PORT
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
  console.log(
    `Server Running on  on port ${PORT}`
  );
});
