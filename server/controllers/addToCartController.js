import cartModel from "../models/cartModel.js";
import productModel from "../models/productModel.js";

export const addtocartController = async(req, res)=>{

  try {
    let cart;
    const { qty, productId, userId } = req.body
    const oldCartData = await cartModel.find({
      productId,
      userId
    }).exec();

    const oldProductData = await productModel.findById(productId);

    let amount = oldProductData.price
    let image = oldProductData.image

let name=oldProductData.name

    if (oldCartData.length === 0) {
      cart = await new cartModel({
        qty,
        productId,
        image,
        amount,
        name,
        userId
      }).save();
    }
    else {
      const { id } = oldCartData[0].id;

      cart = await cartModel.updateOne(
        id,
        { qty: oldCartData[0].qty + 1 },
        { new: true }
      );
    }
    
    const cartItem=await cartModel.find({userId:userId})


    res.status(201).send({
      success: true,
      message: "new cart created",
      cartItem:cartItem.length,
      cart,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Errro in creating cart",
    });
  }
}


//display cart
export const displayCartController=async(req,res)=>{
  
try{
  let id=req.params.id
  const cartData = await cartModel.find({
    userId:id
  });
  
    res.status(200).send({
      success: true,
      message: "All Categories List",
      cartData
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while getting all cart data",
    });

  }

}

//delete cart
export const deleteCartController=async(req,res)=>{
 

  try {
    const { id } = req.params;
   await cartModel.findByIdAndDelete(id);

    res.status(200).send({
      success: true,
      message: "Cart data Deleted Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error while deleting cart data",
      error,
    });

}
}


//update cart
export const updateCartController=async(req,res)=>{

 
    try {
      const { qty } = req.body;
      const { id } = req.params;
      const cart = await cartModel.findByIdAndUpdate(
        id,
        { qty :qty},
        { new: true }
      );
      res.status(200).send({
        success: true,
        messsage: "your cart has been  Updated Successfully",
        cart,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        error,
        message: "Error while updating cart",
      });
    }
  };
