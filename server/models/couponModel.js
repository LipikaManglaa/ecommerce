import { Code } from "mongodb";
import mongoose from "mongoose";

const couponSchema = new mongoose.Schema(
  {
   coupon_code: {
      type: String,
      required: true,
      trim: true,
      uppercase:true,
    },
    type: {
      type: String,
      required: true,
        },
    discount_amount: {
      type: String,
      required: true,
    },
    expiry_date:{
        type:String, 
        required:true,
    },
    minimum_amout_order:{
        type: Number,
        required: true,    
    },

  },
  { timestamps: true }
);

export default mongoose.model("Coupon", couponSchema);
