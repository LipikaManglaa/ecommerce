import productModel from "../models/productModel.js";

import slugify from "slugify";



export const createProductController = async (req, res) => {
    console.log(req.body)
    try {
      const { name ,description, price, subCategoryId, photo} = req.body;
      if (!name) {
        return res.status(401).send({ message: "Name is required" });
      }
      if (!description) {
          return res.status(401).send({ message: "Description is required" });
        }
        if (!price) {
            return res.status(401).send({ message: "Description is required" });
          }
        if (!subCategoryId) {
            return res.status(401).send({ message: "sub Category id is required" });
          }
    
      const product = await new productModel({
        name,
        description,
        price,
        photo,
        slug: slugify(name),
        subCategoryId
      }).save();
    console.log(product)
      res.status(201).send({
        success: true,
        message: "new product created",
        product,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        error,
        message: "Errro in products",
      });
    }
  };
  

  // get all cat
export const productController = async (req, res) => {
    try {
      const product = await productModel.find({});
      res.status(200).send({
        success: true,
        message: "All products List",
        product,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        error,
        message: "Error while getting all products",
      });
    }
  };

  