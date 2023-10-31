import express from "express";
import {
orderGetController,
orderController
 } from "./../../controllers/orderController.js";

const router = express.Router();

//routes




router.post("/save-order", orderGetController);


router.get("/display-order/:id", orderController);

export default router;
