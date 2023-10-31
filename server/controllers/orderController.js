import orderModel from "../models/orderModel.js";
import cartModel from "../models/cartModel.js";

export const orderGetController=async(req,res)=>{

    try {
const {userId,orderAmount,shippingAddress,discount_amount, order_type} = req.body
        const cart = await cartModel.find({userId:userId})
        
        const order = await new orderModel({
            userId,
            shippingAddress:JSON.stringify(shippingAddress),
            orderAmount,
            discount_amount,
            order_type,
            productDetails:JSON.stringify(cart),
            }).save();

            for(var v of cart){
              const cartRemove = await cartModel.findOneAndRemove({userId:userId})
        
            }
          


             
          res.status(200).send({
            success: true,
            message: "All Categories List",
           order,
          });
        } catch (error) {
          console.log(error);
          res.status(500).send({
            success: false,
            error,
            message: "Error while getting all sub categories",
          });
        }
      };


      //get data from order 

      
export const orderController=async(req,res)=>{
  
  try{
    let id=req.params.id
    const orderData = await orderModel.find({
      userId:id
    });
    
      res.status(200).send({
        success: true,
        message: "All order List",
        orderData
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        error,
        message: "Error while getting all order data",
      });
  
    }
  
  }
  