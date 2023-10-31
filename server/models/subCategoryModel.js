const { Schema, model } = require('mongoose');

const subCategorySchema = new Schema(
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
      type: Schema.Types.ObjectId,
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

//  export default mongoose.model("subCategory", subCategorySchema);
const subCategory=model("subCategory", subCategorySchema);
module.exports = subCategory;