const orderModel =require("../models/orderModel");
const cartModel =require("../models/cartModel");
const stripe = require("stripe")("sk_test_51O5fDhIPM4mXdoaJnv8oBMjwVPzAvrdFf7cw0Fk939Kh8Rm3rQfPkoCDnDyNbCkPrSqnxZbeo9ymm2wb4wghOea700ADselVmO");

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
    console.log(req.body)

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
      success_url: "https://gruesome-chupacabra-93812-89264ae7b4ee.herokuapp.com",
    cancel_url: "https://gruesome-chupacabra-93812-89264ae7b4ee.herokuapp.com/stripepaymentcancel",
    });
  
    res.json({ id: session.id });
  },
}
  