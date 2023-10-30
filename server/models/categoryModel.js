import mongoose from "mongoose";
const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description:{
    type: String,
    required: true,
  },
  slug: {
    type: String,
    lowercase: true,
  },
  image:{
    type:String,
    }
 
},
{
  toJSON: {
    virtuals: true,
  },
  id: false,
}
);

export default mongoose.model("Category", categorySchema);
