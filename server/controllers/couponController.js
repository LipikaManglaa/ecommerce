const couponModel= require("../models/couponModel")

module.exports={
     async createCouponController(req,res){
    const {coupon_code,type,discount_amount,expiry_date,minimum_amout_order} = req.body;
   
      var d = new Date(expiry_date),
          month = '' + (d.getMonth() + 1),
          day = '' + d.getDate(),
          year = d.getFullYear();
      
        if (month.length < 2) 
          month = '0' + month;
        if (day.length < 2) 
          day = '0' + day;
      
       let dataExpire=[year, month, day].join('-');
    
   try{
      const coupon = await new couponModel({
        coupon_code,
        type,
        discount_amount,
        expiry_date:dataExpire,
        minimum_amout_order

         }).save();
      res.status(201).send({
        success: true,
        message: "new coupon created",
        coupon,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        error,
        message: "Errro in creating coupon",
      });
    }
  
},


   async couponControlller(req, res)  {
    try {
      // const category = await categoryModel.find({})
      const coupon = await couponModel.find({});
     
     
      res.status(200).send({
        success: true,
        message: "All coupon List",
        coupon
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        error,
        message: "Error while getting all coupons",
      });
    }
  },



async checkCouponController(req,res){
  try{
let couponCode=req.body.checkCode
    const coupon = await couponModel.findOne({
      coupon_code:couponCode
    });
    


    if(coupon!==null){
      let d=new Date().getTime(); //Current Data
 

   let expireDate=new  Date(coupon.expiry_date).getTime() //BD date

   if(expireDate>=d){
        res.status(200).send({
        success: true,
        message: "All coupon List",
        coupon
      });
    }else{
      res.status(200).send({
        success: false,
        message: "Coupon expired!",
        
      });
    }
  
    }
    else{
      res.status(200).send({
        success: false,
        message: "Coupon not found",
        
      });
  
    }
   
  }catch(error){
    console.log(error);
      res.status(500).send({
        success: false,
        error,
        message: "Not Valid",
      });
  }
},

//delete coupon

 //delete category
   async deleteCouponController(req, res) {
  try {
    const { id } = req.params;
    await couponModel.findByIdAndDelete(id);
    res.status(200).send({
      success: true,
      message: "sCoupon Deleted Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error while deleting coupon",
      error,
    });
  }
},
}
