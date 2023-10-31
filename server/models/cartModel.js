const { Schema, model } = require('mongoose');

const cartSchema = new Schema(
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
            type: Schema.Types.ObjectId,
            ref: "Product",
            required: true,
        },

        userId: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },


    },
    { timestamps: true, }

);


// export default mongoose.model("Cart", cartSchema);
const Cart=model("Cart", cartSchema);
module.exports = Cart;