import mongoose from "mongoose";

const cartSchema = new mongoose.Schema(
    {
        qty: {
            type: Number,
            required: true,
        },
        amount: {
            type: Number,
            required: true,

        },
        image:{
            type:String,
        },
        name:{
            type:String,
        },
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
            required: true,
        },

        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },


    },
    { timestamps: true, }

);

export default mongoose.model("Cart", cartSchema);
