const {Category} =require("../models");
const {subCategoryModel}=require("../models/subCategoryModel");
const {productModel} =require("../models/productModel");
const slugify=require('slugify')


module.exports={

 async createCategoryController (req, res) {
  
  const imageName = req.file.filename;
  try {
    const { name ,description} = req.body;
    if (!name) {
      return res.status(401).send({ message: "Name is required" });
    }
    if (!description) {
        return res.status(401).send({ message: "Description is required" });
      }
    const existingCategory = await Category.findOne({ name });
    if (existingCategory) {
      return res.status(200).send({
        success: false,
        message: "Category Already Exisits",
      });
    }
    const category = await new Category({
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
      error,
      message: "Errro in Category",
    });
  }
},

//update category
  async updateCategoryController(req, res)  {

  let imageName=req.file.filename

  try {
    const { name,description} = req.body;
    const { id } = req.params;
    const category = await Category.findByIdAndUpdate(
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
},


//get cat

  async getcreateCategoryController (req,res){
  try{
    const categories = await Category.find({});
    console.log(categories)
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
},


// single category
async singleCategoryController (req, res)  {
  try {
    const category = await Category.findOne({ slug: req.params.slug });
    console.log(category)
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
},


  async categoryControlller (req, res) {
  try {
   
    const categories = await Category.find({});
    let finalresult = [];

    for (let category of categories) {

            finalresult.push({
              category: category,
            
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
},



//delete category
async  deleteCategoryCOntroller (req, res)  {
  try {
    const { id } = req.params;
    await Category.findByIdAndDelete(id);
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
},
}