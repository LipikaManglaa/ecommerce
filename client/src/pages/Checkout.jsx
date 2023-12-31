import React, { useEffect, useState } from 'react'
import './../styles/Checkout.css'
import { useAuth } from '../context/auth'
import axios from 'axios'
import { toast } from 'react-toastify'
import './../styles/Checkout.css'
import { useNavigate } from 'react-router-dom'

import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe("pk_test_51O5fDhIPM4mXdoaJvRWBxpDnsibWo0zyMQ37sskCGVK31KUTsXjx1GGvJiyZ3WDz0M2HLn2qd39IC7ZadO6uvHzf00vrb3TEuM");

export default function Checkout() {
  let userData = JSON.parse(localStorage.getItem("auth")) ?? []

  if (userData.length === 0) {
      window.location = "/login"
  }
  let[address,setAddress]=useState("")
  let[city,setCity]=useState("")
  let[state,setState]=useState("")
  let[pincode,setPincode]=useState("")
  let[country,setCountry]=useState("")
  let[auth,setAuth]=useAuth()
  let[cartD,setCartD]=useState([])
  let [cartTotal,setCartTotal]=useState(0)
  let[couponCodeAmount,setCouponCodeAmount]=useState(0)
  let[discoutAmount ,setDiscountAmount]=useState(0)
  let[discountPercentage,setDiscountPercentage]=useState(0)
  let[shippingAddress,setShippingAddress]=useState()
  let [sessionData,setSessionData]=useState({})

let navigate=useNavigate()
let[orderType,setOrderType]=useState("cash")
  //order display
  let user=JSON.parse(localStorage.getItem("auth"))
  let userId=user.user.id;
  let handleOrder=async(e)=>{
   
    if(orderType=="cash") {
      axios.post(`/api/save-order/`,{
        userId,
        orderAmount:cartTotal,
        couponCodeAmount,
        discoutAmount,
        order_type:orderType,
        shippingAddress:{
          address,
          city,
          state,
          pincode,
          country,
        }
      })
      .then((res)=>{
       
      })
      toast.success("your order has been done succesfuuly!",{autoClose:1000})
      navigate(`/`)
      
setAuth({...auth,cartItem:0})
localStorage.removeItem('coupon')


    }
    else{ 
      
         axios.post(`/api/create-checkout-session/`,{
        userId,
        orderAmount:cartTotal,
        couponCodeAmount,
        discoutAmount,
        order_type:orderType,
        shippingAddress:{
          address,
          city,
          state,
          pincode,
          country,
        }
      }).then((res)=>{
        return res.data
      }).then((response)=>{
        setSessionData(response)
      })


    
    // When the customer clicks on the button, redirect them to Checkout.
   
    
    }
      
  


  }

  useEffect(async()=>{

    if(sessionData.id !== undefined){
    const stripe = await stripePromise;

    const result = await stripe.redirectToCheckout({
      sessionId: sessionData.id,
    });
  }
  },[sessionData])


//cart data display
  const getCartData =  () => {
    let user=JSON.parse(localStorage.getItem("auth"))
 
    userId=user.user.id;
  
    axios.get(`/api/display-cart/${userId}`)
    
    .then((res)=>res.data)
    .then((finalData)=>{

      setCartD(finalData.cartData)

      setAuth({...auth,cartItem:finalData.cartData.length})

      let total=0;
      finalData.cartData.forEach((v)=>{
        total=total+(v.qty*v.amount)
      })
         setCartTotal(total)
        

        let oldCoupon=JSON.parse(localStorage.getItem("coupon")) ?? []
    
        if(oldCoupon.length==1){
          let totalPer=Number(oldCoupon[0].discount_amount);
          let discount_amount=total*totalPer/100
     
          setDiscountPercentage(totalPer)
          setDiscountAmount(discount_amount)
           setCouponCodeAmount(total-discount_amount);
        }
        else{
          setCouponCodeAmount(total)
        }
    
    })
  }
 

  let paymentMethod=(e)=>{
    setOrderType(e.target.value)
  }

  let handleSubmit= async (e) =>{
    let user=JSON.parse(localStorage.getItem("auth"))
    let userId=user.user.id;
   
    e.preventDefault();
    try{
    const res=await axios.post(`/api/add-address/${userId}`,{
      address,
      city,
      state,
      pincode,
      country,
      userId
      
      })
     
      if (res.data.success) {
        toast.success(res.data.message,{autoClose:1000});
        setAddress("")
        setCity("")
        setState("")
        setPincode("")
        setCountry("")
        // setTimeout(()=>{
        //   navigate("/login");
        // },2000)
       
      } else {
        toast.error(res.data.message);
      }

    }catch(error){
      console.log(error)
    }
  }


useEffect(()=>{
  getCartData()
 
 
},[])
  return (
  <>
<div className='checkout' >
  <div className='checkout-head'>
  <h1 className='checkout-title'>Checkout</h1>
  <div className="row checkout-inner">
    <div className="col-50 checkout-left">
      <div className="container checkout-list">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-100">
              <h3 className='billing'>Billing Address</h3>
            
              <label htmlFor="adr"><i className="fa fa-address-card-o" /> Address</label>
              <input type="text" id="adr" name="address" placeholder="542 W. 15th Street"  value={address}
              onChange={(e) => setAddress(e.target.value)} />
              <label htmlFor="city"><i className="fa fa-institution" /> City</label>
              <input type="text" id="city" name="city" placeholder="New York" value={city}
              onChange={(e) => setCity(e.target.value)}/>
              <div className="row">
                <div className="col-50">
                  <label htmlFor="state">State</label>
                  <input type="text" id="state" name="state" placeholder="NY" value={state}
              onChange={(e) => setState(e.target.value)} />
                </div>
                <div className="col-50">
                  <label htmlFor="zip">Pincode</label>
                  <input type="text" id="zip" name="pincode" placeholder={10001} value={pincode}
              onChange={(e) => setPincode(e.target.value)} />
                </div>
                <div className="col-50">
                  <label htmlFor="zip">Country</label>
                  <input type="text"  name="country" placeholder={10001} value={country}
              onChange={(e) => setCountry(e.target.value)} />
                </div>
              </div>
            </div>
        
          </div>
         
          <input type="submit" defaultValue="Continue to checkout" className="btn" />
        </form>
      </div>
    </div>
    <div className="col-50 checkout-right">
      <div className="container">
         	<div className="col-5 col order">
  <h3 className="topborder"><span>Your Order</span></h3>
  <div className="row justify-between">
    <h4 className="inline">Product Name</h4>
   <p>Product Price</p>
   <span>Qty</span>
   <h4>Total Price</h4>
  </div>
  <div>
    {
      cartD.length>0 ? 
cartD.map((v,i)=>{
  return(
    <>
    <div className="row justify-between" key={i}>
    <h4 className="inline">{v.name}</h4>
   <p>{v.amount}</p>
   <span>{v.qty}</span>
   <h4>{v.qty*v.amount}</h4>
    </div>
   
   
    </>
  )
})

      : " No data into cart!"
    }
    
  </div>
  <div style={{display:'flex',justifyContent:'space-between'}}><h5>Cart Subtotal </h5><h6>{cartTotal}</h6></div>
  <div style={{display:'flex',justifyContent:'space-between'}}><h5>Discount Amount </h5><h6>{discoutAmount}</h6></div>

  
  <div  style={{display:'flex',justifyContent:'space-between'}}><h5>Order Total </h5><h6>{couponCodeAmount}</h6></div>
  <div className='payment'>
    <h3 className="topborder"><span>Payment Method</span></h3>
    </div>
    <div className='payment'>
    <input type="radio" defaultValue="cash" onChange={paymentMethod} name="payment" defaultChecked /><p>Cash payment</p>
    </div>
    

  <div className='payment'><input type="radio" defaultValue="stripe" name="payment" onChange={paymentMethod}/><p>Pay By Stripe</p></div>

  <input type="submit" name="submit"  onClick={handleOrder} defaultValue="Place Order" className="redbutton wbtn" style={{width:'100%'}} />
</div>

      
</div>

      </div>
    </div>
  </div>
</div>


  </>
  )
}
