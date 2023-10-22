import colorModel from "../models/colorModel.js";

export const createColorController = async (req, res) => {
    
    try {
      const { color_name ,  productId} = req.body;
      if (!color_name) {
        return res.status(401).send({ message: "color Name is required" });
      }
      if (!productId) {
          return res.status(401).send({ message: "Product Id is required" });
        }
   
      const color = await new colorModel({
        color_name,
        productId,
       
      }).save();
      res.status(201).send({
        success: true,
        message: "new color created",
        color,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        error,
        message: "Errro in Color",
      });
    }
  };

  //get all colro name
  export const colorControlller = async (req, res) => {
    try {
      const color = await colorModel.find({});
      res.status(200).send({
        success: true,
        message: "All Categories List",
        color,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        error,
        message: "Error while getting all colors",
      });
    }
  };

  //get single color
  
  export const singleColorController = async (req, res) => {
    try {
        const { id } = req.params;
      const color = await colorModel.findOne({ _id: id });
      res.status(200).send({
        success: true,
        message: "Get SIngle color SUccessfully",
        color,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        error,
        message: "Error While getting Single Color",
      });
    }
  };
  
//update color
export const updateColorController = async (req, res) => {
    try {
      const {color_name } = req.body;
      const { id } = req.params;
      const color = await colorModel.findByIdAndUpdate(
        id,
        { color_name },
        { new: true }
      );
      res.status(200).send({
        success: true,
        messsage: "Category Updated Successfully",
        color,
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


  //delete color
export const deleteColorCOntroller = async (req, res) => {
    try {
      const { id } = req.params;
      await colorModel.findByIdAndDelete(id);
      res.status(200).send({
        success: true,
        message: "Color Deleted Successfully",
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "error while deleting color",
        error,
      });
    }
  };
  