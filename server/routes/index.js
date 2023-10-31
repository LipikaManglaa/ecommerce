// const router = require('express').Router();
// const apiRoutes = require('./api');

// module.exports = router;

import express from "express";

const router = express.Router();

import apiRoutes from "./api/index.js";

router.use('/api', apiRoutes);


//frontend admin login

export default router