import mongoose from "mongoose";

const subCategorySchema = new mongoose.Schema(
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
        },
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required:true,
     },
    image:{
      type:String,
    }
   
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  },
  { timestamps: true,
  });
  
  //, { strictPopulate: false }

 export default mongoose.model("subCategory", subCategorySchema);
