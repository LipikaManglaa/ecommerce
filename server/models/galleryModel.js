import mongoose from "mongoose";

const gallerySchema = new mongoose.Schema(
  {
   image:{
    type: String,
    sparse:true,
  },
 })

export default mongoose.model("Gallery", gallerySchema);
