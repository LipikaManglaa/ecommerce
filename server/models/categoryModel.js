const { Schema, model } = require('mongoose');

const categorySchema = new Schema({
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

// export default mongoose.model("Category", categorySchema);

const Category=model("Category", categorySchema);
module.exports = Category;