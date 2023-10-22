import mongoose from "mongoose";

const colorSchema = new mongoose.Schema({
  color_name: {
    type: String,
    required: true,
    unique: true,
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  
});

export default mongoose.model("Color", colorSchema);
