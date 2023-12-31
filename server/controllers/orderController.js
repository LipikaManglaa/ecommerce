const orderModel =require("../models/orderModel");
const cartModel =require("../models/cartModel");
const stripe = require("stripe")("sk_test_51O5fDhIPM4mXdoaJnv8oBMjwVPzAvrdFf7cw0Fk939Kh8Rm3rQfPkoCDnDyNbCkPrSqnxZbeo9ymm2wb4wghOea700ADselVmO");
// const stripe = require("stripe")(process.env.Private_Api_Key);
module.exports={
 async orderGetController(req,res){

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
      },


      //get data from order 

      
 async orderController(req,res){
  
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
  
  },


  //checkour session
  async checkoutSessionController(req,res){


    const {userId,orderAmount,shippingAddress,discount_amount, order_type,couponCodeAmount} = req.body
        const cart = await cartModel.find({userId:userId})

        let cartLenght=cart.length;
        
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
          




    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: "ordrData",
            },
            unit_amount: Math.round(parseInt(couponCodeAmount))*100,
          },
          quantity: cartLenght,
        },
      ],
      mode: 'payment',
      success_url: "http://localhost:3000",
    cancel_url: "http://localhost:3000/stripepaymentcancel",
    });
  
    res.json({ id: session.id });
  },
}
  