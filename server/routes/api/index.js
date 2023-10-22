
import express from "express";
const router = express.Router();
import categoryRoutes from './categoryRoutes.js';
import subCategoryRoutes from './subCategoryRoutes.js';
import productRoutes from './productRoutes.js';
import authRoutes from './authRoutes.js';
import productImageRoutes from './productImagesRoutes.js';
import colorRoutes from './colorRoutes.js';

router.use('/', categoryRoutes);

router.use('/', subCategoryRoutes);

router.use('/', productRoutes);

router.use('/', authRoutes);

 router.use('/', productImageRoutes);

 router.use('/', colorRoutes);

export default router;
