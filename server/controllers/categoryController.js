import categoryModel from "../models/categoryModel.js";
import subCategoryModel from "../models/subCategoryModel.js";
import productModel from "../models/productModel.js";
import slugify from "slugify";


export const createCategoryController = async (req, res) => {
  
  const imageName = req.file.filename;
  try {
    const { name ,description} = req.body;
    if (!name) {
      return res.status(401).send({ message: "Name is required" });
    }
    if (!description) {
        return res.status(401).send({ message: "Description is required" });
      }
    const existingCategory = await categoryModel.findOne({ name });
    if (existingCategory) {
      return res.status(200).send({
        success: false,
        message: "Category Already Exisits",
      });
    }
    const category = await new categoryModel({
      name,
      description,
      slug: slugify(name),
      image:imageName,
    }).save();
    res.status(201).send({
      success: true,
      message: "new category created",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      errro,
      message: "Errro in Category",
    });
  }
};

//update category
export const updateCategoryController = async (req, res) => {
  console.log(req.file.filename)
  let imageName=req.file.filename
  console.log(imageName)
  try {
    const { name,description} = req.body;
    const { id } = req.params;
    const category = await categoryModel.findByIdAndUpdate(
      id,
      { name, description,slug: slugify(name) , image:imageName},
      { new: true }
    );
    res.status(200).send({
      success: true,
      messsage: "Category Updated Successfully",
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


//get cat

export const getcreateCategoryController =async(req,res)=>{
  try{
    const categories = await categoryModel.find({});
    res.status(200).send({
      success: true,
      message: "All Categories List",
      categories
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while getting all categories",
    });
  }
}
// get all cat
export const categoryControlller = async (req, res) => {
  try {
   
    const categories = await categoryModel.find({});
    const finalresult = [];
   
    for (let category of categories) {
        const subcategories = await subCategoryModel.find({ 'categoryId': category._id });
        const subcategoriesWithProducts = [];

        for (let subcategory of subcategories) {
            const products = await productModel.find({ 'subCategoryId': subcategory._id });
            subcategoriesWithProducts.push({
                subcategory: subcategory,
                products: products,
            });
        }

        finalresult.push({
            category: category,
            subcategories: subcategoriesWithProducts,
        });
    }

  
   
    res.status(200).send({
      success: true,
      message: "All Categories List",
      finalresult
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while getting all categories",
    });
  }
};

// single category
export const singleCategoryController = async (req, res) => {
  try {
    const category = await categoryModel.findOne({ slug: req.params.slug });
    res.status(200).send({
      success: true,
      message: "Get SIngle Category SUccessfully",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error While getting Single Category",
    });
  }
};

//delete category
export const deleteCategoryCOntroller = async (req, res) => {
  try {
    const { id } = req.params;
    await categoryModel.findByIdAndDelete(id);
    res.status(200).send({
      success: true,
      message: "Categry Deleted Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error while deleting category",
      error,
    });
  }
};
