import mongoose from "mongoose";


const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
     subCategoryId: {
      type:mongoose.Schema.Types.ObjectId,
      ref: "subCategory",
      required: true,
    },
    photo: {
      type:String,
    },
   
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
