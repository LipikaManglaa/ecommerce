import { Code } from "mongodb";
import mongoose from "mongoose";

const couponSchema = new mongoose.Schema(
  {
   coupon_code: {
      type: String,
      required: true,
      trim: true,
    },
    type: {
      type: String,
      required: true,
      unique: true,
    },
    amount: {
      type: Array[fixed,percentage],
      required: true,
    },
    expiry_date:{
        type: Date, 
        default: Date.now 
    },
    minimum_amout_order:{
        type: Number,
        required: true,
    },

  },
  { timestamps: true }
);

export default mongoose.model("Coupon", couponSchema);
