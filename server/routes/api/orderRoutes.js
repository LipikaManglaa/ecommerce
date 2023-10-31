const express = require('express');
const {
orderGetController,
orderController
 } =require("./../../controllers/orderController.js")

const router = express.Router();

//routes




router.post("/save-order", orderGetController);


router.get("/display-order/:id", orderController);

module.exports = router;
