import subCategoryModel from "../models/subCategoryModel.js";
import slugify from "slugify";


export const createSubCategoryController = async (req, res) => {
    console.log(req.body)
    try {
      const { name ,description,categoryId} = req.body;
      if (!name) {
        return res.status(401).send({ message: "Name is required" });
      }
      if (!description) {
          return res.status(401).send({ message: "Description is required" });
        }
        if (!categoryId) {
            return res.status(401).send({ message: "Category id is required" });
          }
      const existingSubCategory = await subCategoryModel.findOne({ name });
      if (existingSubCategory) {
        return res.status(200).send({
          success: false,
          message: "Sub Category Already Exisits",
        });
      }
      const subcategory = await new subCategoryModel({
        name,
        description,
        slug: slugify(name),
        categoryId
      }).save();
    console.log(subcategory)
      res.status(201).send({
        success: true,
        message: "new sub category created",
        subcategory,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        error,
        message: "Errro in sub Category",
      });
    }
  };
  

  //update Sub category
export const updateSubCategoryController = async (req, res) => {
    try {
      const { name,description,categoryId } = req.body;
      const { id } = req.params;
      const category = await subCategoryModel.findByIdAndUpdate(
        id,
        { name, description,categoryId,slug: slugify(name) },
        { new: true }
      );
      res.status(200).send({
        success: true,
        messsage: "Sub Category Updated Successfully",
        category,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        error,
        message: "Error while updating category",
      });
    }
  };

  // get all cat
export const subCategoryControlller = async (req, res) => {
    try {
      const subcategory = await subCategoryModel.find({});
      res.status(200).send({
        success: true,
        message: "All Categories List",
        subcategory,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        error,
        message: "Error while getting all sub categories",
      });
    }
  };

  // single category
export const singleSubCategoryController = async (req, res) => {
    try {
      const subcategory = await subCategoryModel.findOne({ slug: req.params.slug });
      res.status(200).send({
        success: true,
        message: "Get SIngle Category SUccessfully",
        subcategory,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        error,
        message: "Error While getting Single sub Category",
      });
    }
  };


  //delete category
export const deleteSubCategoryController = async (req, res) => {
    try {
      const { id } = req.params;
      await subCategoryModel.findByIdAndDelete(id);
      res.status(200).send({
        success: true,
        message: "sub Categry Deleted Successfully",
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "error while deleting sub category",
        error,
      });
    }
  };