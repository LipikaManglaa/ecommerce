const { Schema, model } = require('mongoose');

const productSchema = new Schema(
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
      type:Schema.Types.ObjectId,
      ref: "subCategory",
      required: true,
    },
    image: {
      type:String,
    },
   
  },
  { timestamps: true }
);

// export default mongoose.model("Product", productSchema);
const Product=model("Product", productSchema);
module.exports = Product;
