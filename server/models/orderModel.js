import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
    {
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
    productDetails: {
        type:Object
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
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
    },
    
    order_date:{
        type: Date, 
        default: Date.now 
    },
}
)

export default mongoose.model("Order", orderSchema);
