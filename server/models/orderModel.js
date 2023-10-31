// import mongoose from "mongoose";
const { Schema, model } = require('mongoose');
const orderSchema = new Schema(
    {
    userId: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
    orderAmount:{
        type:Number,
    },
    shippingAddress:{
        type:String,
    },

    productDetails: {
        type:String,
    // {
    //     products:{
    //         type:Array,
    //         items:{
    //             pName:String,
    //             price:Number,
    //             qty:Number,
    //         },
    //     }
        
    },
  
    discount_amount: {
        type: String,
        
      },
      order_type:{
        type:String,
      },
    
    order_date:{
        type: Date, 
        default: Date.now 
    },
}
)

// export default mongoose.model("Order", orderSchema);
const Order=model("Order", orderSchema);
module.exports = Order;