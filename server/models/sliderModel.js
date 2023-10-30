import mongoose from "mongoose";

const sliderSchema = new mongoose.Schema(
  {
   image:{
    type: String,
  },
     name:{
     type: String,
   },
 
 },
 { timestamps: true }
 )

export default mongoose.model("Slider", sliderSchema);
