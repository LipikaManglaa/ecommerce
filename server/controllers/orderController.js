import orderModel from "../models/orderModel.js";
import cartModel from "../models/cartModel.js";

export const orderGetController=async(req,res)=>{

    try {
const {userId,productId, productDetails, order_date} = req.body
        const cart = await cartModel.findAll({userId: req.params.id})
        console.log(cart)
        const order = await new orderModel({
            userId,
            productId,
            productDetails:cart,
            order_date
          }).save();
             
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
  