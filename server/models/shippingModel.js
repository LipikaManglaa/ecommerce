const { Schema, model } = require('mongoose');

const shippingSchema = new Schema(
  {
    address: {
      type: String,
      required: true,
    },
    city: {
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
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  
   
  },
  { timestamps: true }
);

// export default mongoose.model("Shipping", shippingSchema);

const Shipping=model("Shipping", shippingSchema);
module.exports = Shipping;