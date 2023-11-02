const express = require('express');
const {
orderGetController,
orderController,
checkoutSessionController
 } =require("./../../controllers/orderController.js")

const router = express.Router();

//routes




router.post("/save-order", orderGetController);


router.post("/create-checkout-session", checkoutSessionController);
router.get("/display-order/:id", orderController);

module.exports = router;
