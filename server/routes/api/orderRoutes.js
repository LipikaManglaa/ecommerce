import express from "express";
import {
orderGetController,
orderController
 } from "./../../controllers/orderController.js";

const router = express.Router();

//routes




router.post("/get-order/:id", orderGetController);


router.get("/order/:id", orderController);

export default router;
