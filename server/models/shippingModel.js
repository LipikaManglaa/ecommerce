import mongoose from "mongoose";

const shippingSchema = new mongoose.Schema(
  {
    address: {
      type: String,
      required: true,
    },
   state: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    pincode: {
      type: Number,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
   
  },
  { timestamps: true }
);

export default mongoose.model("Shipping", shippingSchema);
