const subCategoryModel =require("../models/subCategoryModel");
const slugify =require('slugify');
const categoryModel =require("../models/categoryModel");
const productModel =require("../models/productModel")

module.exports={
  
  async  createSubCategoryController (req, res)  {
  const imageName = req.file.filename;
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
     
      const subcategory = await new subCategoryModel({
        name,
        description,
        slug: slugify(name),
        categoryId,
        image:imageName
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
  },
  

  //update Sub category
  async updateSubCategoryController (req, res)  {
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
  },

  // get all cat
 async subCategoryControlller (req, res)  {
    try {

    const subcategory = await subCategoryModel.find({})
    
   
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
  },

  // single category
  async singleSubCategoryController (req, res)  {
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
  },


  //delete category
  async deleteSubCategoryController (req, res)  {
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
  },


    // get all cat by slug
 async subslugCategoryControlller(req, res)  {


  try {
  
    const subcategories = await subCategoryModel.find({});
    const finalresult = [];
   console.log(subcategories)
 
        for (let subcategory of subcategories) {
            const products = await productModel.find({ 'subCategoryId': subcategory._id });
            finalresult.push({
                subcategory: subcategory,
                products: products,
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
      message: "Error while getting all sub categories",
    });
  }
},

async  productSubCategoryControlller(req,res){

  try{
    
    const category= await categoryModel.find({});

    const finalresult = [];
  let catData= await categoryModel.findOne({ slug: req.query.slug }).exec();

  let currentCatId=catData._id 

  const subcategories= await subCategoryModel.find({categoryId:currentCatId}).exec()

  const subcategoriesWithProducts = [];

        for (let subcategory of subcategories) {
            const products = await productModel.find({ 'subCategoryId': subcategory._id });
            subcategoriesWithProducts.push({
                subcategory: subcategory,
                products: products,
            });
        }

        finalresult.push({
           
            subcategories: subcategoriesWithProducts,
        });
  




  res.status(200).send({
    success: true,
    message: "All Categories List",
    catData, //Parent Category
 
 finalresult //SubCategory + Product
  });

   

  }catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while getting all sub categories",
    });
  }

},


  //filter data
async  produuctFilterController(req,res){
    try{
     const finalresult = [];
   
    const subcategories= req.body.subCat;
    if(subcategories.length>0){

      for (let subcategory of subcategories) {
                  const products = await productModel.find({ 'subCategoryId': subcategory });
                  finalresult.push(products)
        }

      // const subcategoriesWithProducts = [];
  
    //       for (let subcategory of subcategories) {
    //           const products = await productModel.find({ 'subCategoryId': subcategory._id });
    //           subcategoriesWithProducts.push({
    //               subcategory: subcategory,
    //               products: products,
    //           });
    //       }
  
    //       finalresult.push({
             
    //           subcategories: subcategoriesWithProducts,
    //       });
    }
  
    
    
  
          res.status(200).send({
            success: true,
            message: "All Categories List",
            
            finalresult
         
          });
    
    }catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        error,
        message: "Error while getting all filter products",
      });
    }
      },

//acees data from catgory to subcategory
async catSubCatgeoryController(req,res){
  try {
   
    const data= await subCategoryModel.find({}).populate({path:'categoryId',model:'Category'})
   
   console.log(data)
  
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
},
}