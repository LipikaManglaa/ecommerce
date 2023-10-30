import productModel from "../models/productModel.js";
import subCategoryModel from "../models/subCategoryModel.js";
import slugify from "slugify";
import path from 'path'
import { dirname } from 'path';
import { fileURLToPath } from 'url';
// const __dirname = dirname(fileURLToPath(import.meta.url));
// console.log(__dirname)
// const uploadFilePath = path.resolve(__dirname, "../../../", "../uploads");
// console.log(uploadFilePath)

//  const rootDir = path.resolve(__dirname);
 
//  console.log(rootDir)



export const createProductController = async (req, res) => {

    const imageName = req.file.filename;
    try {
      const { name ,description, price, subCategoryId} = req.body;
      if (!name) {
        return res.status(401).send({ message: "Name is required" });
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
        slug: slugify(name),
        subCategoryId,
        image:imageName,
      }).save();
   
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
  

  // get all products
export const productController = async (req, res) => {
 
    try {
      const product = await productModel.find({})
      res.status(200).send({
        success: true,
        message: "All products List",
        product,
        // imagePath:uploadFilePath,
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

  
  //single product

  export const singleProductController = async (req, res) => {
   
    try {
      const product = await productModel.findOne({ slug: req.params.slug });
      res.status(200).send({
        success: true,
        message: "Get SIngle product SUccessfully",
        product,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({

        success: false,
        error,
        message: "Error While getting Single product",
      });
    }
  };


   //delete category
export const deleteProductController = async (req, res) => {
  try {
    const { id } = req.params;
    await productModel.findByIdAndDelete(id);
    res.status(200).send({
      success: true,
      message: "Product Deleted Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error while deleting product",
      error,
    });
  }
};


//how to acess data
export const productCatSubCatgeoryController=async(req,res)=>{
  try {
   
    const data= await productModel.find({}).populate({path:'subCategoryId',model:'subCategory'})
        res.status(200).send({
       success: true,
       message: "All Categories List",
      data,
     });
   } catch (error) {
     console.log(error);
     res.status(500).send({
       success: false,
       error,
       message: "Error while getting all sub categories",
     });
   }
}


//product accesnding order
export const produuctAccesndinOrderController = async (req, res) => {
 
    try {
      const product = await productModel.find({}).sort({name:1})
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


