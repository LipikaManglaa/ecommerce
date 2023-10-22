import mongoose from "mongoose";

const adminLoginSchema = new mongoose.Schema(
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

export default mongoose.model("adminLogin", adminLoginSchema);
