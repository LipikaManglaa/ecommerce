const router = require('express').Router();
const apiRoutes = require('./api');



// import express from "express";

// const router = express.Router();

// import apiRoutes from "./api/index.js";

router.use('/api', apiRoutes);

module.exports = router;
//frontend admin login

// export default router