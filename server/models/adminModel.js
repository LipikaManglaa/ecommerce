const { Schema, model } = require('mongoose');

const adminLoginSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    },
  { timestamps: true }
);


const adminLogin=model("adminLogin", adminLoginSchema);
module.exports =adminLogin;

// export default mongoose.model("adminLogin", adminLoginSchema);
