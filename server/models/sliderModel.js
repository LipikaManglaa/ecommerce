const { Schema, model } = require('mongoose');

const sliderSchema = new Schema(
  {
   image:{
    type: String,
  },
     name:{
     type: String,
   },
 
 },
 { timestamps: true }
 )

// export default mongoose.model("Slider", sliderSchema);
const Slider=model("Slider", sliderSchema);
module.exports = Slider;