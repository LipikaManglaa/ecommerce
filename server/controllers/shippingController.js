const shippingModel =require("../models/shippingModel")


module.exports={
 async createAddressController(req,res){
    const userId=req.params.id
    try{
    const{address,city,state,country,pincode ,userId} = req.body
     //validations
     if (!address) {
        return res.send({ error: "Address is Required" });
      }
       
        if (!state) {
            return res.send({ error: "State is Required" });
          }
          if (!pincode) {
            return res.send({ message: "pincode is Required" });
          }
      if (!country) {
        return res.send({ message: "country is Required" });
      }
      const shippping = await new shippingModel({
        address,
        city,
        state,
        pincode,
        country,
        userId
            }).save();
          
      res.status(201).send({
        success: true,
        message: "Address added sucessfully",
        shippping,
      });
    } catch (error) {
     
      res.status(500).send({
        success: false,
        message: "Error in address add",
        error,
      });
    }

},
}