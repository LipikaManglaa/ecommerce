import sliderModel from "../models/sliderModel.js";


export const createSliderController = async function (req, res, next) {

  const imageName = req.file.filename;

  try {
    
    let pImageeee = await new sliderModel({
         image: imageName,
       }).save();
    res.status(201).send({
      success: true,
      message: "new image created",
      pImageeee,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Errro in upload",
    });
  }


}

export const SliderVIewController =  async function (req, res) {
  try {
    
           const sliderImage = await sliderModel.find({});
            res.status(200).send({
             success: true,
             message: "All slider Images List",
             sliderImage,
           });
   
    } catch (error) {
           console.log(error);
           res.status(500).send({
             success: false,
             error,
             message: "Errro in upload slider",
           });
         }


}

