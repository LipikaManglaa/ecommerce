import React, { useEffect, useState } from 'react'
import './../styles/Checkout.css'
import { useAuth } from '../context/auth'
import axios from 'axios'
import { toast } from 'react-toastify'
import './../styles/Checkout.css'
import { useNavigate } from 'react-router-dom'
export default function Checkout() {
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
    }
    else{ 

    }

toast.success("your order has been done succesfuuly!",{autoClose:1000})
setAuth({...auth,cartItem:0})
localStorage.removeItem('coupon')

navigate('/user-dashboard')
  }



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
              <input type="text" id="adr" name="address" placeholder="542 W. 15th Street" value={address}
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
          <label>
            <input type="checkbox" defaultChecked="checked" name="sameadr" /> Shipping address same as billing
          </label>
          <input type="submit" defaultValue="Continue to checkout" className="btn" />
        </form>
      </div>
    </div>
    <div className="col-50 checkout-right">
      <div className="container">
   

      
       
      	<div className="col-5 col order">
  <h3 className="topborder"><span>Your Order</span></h3>
  <div className="row justify-between">
    <h4 className="inline">Product</h4>
   
  </div>
  <div>
    {
      cartD.length>0 ? 
cartD.map((v,i)=>{
  return(
    <>
    <p className="prod-description inline">{v.name}</p>  |   <div className="qty inline"> {v.amount}  <span className="smalltxt">x</span> {v.qty} ={v.qty*v.amount}</div>
    <p />
    </>
  )
})

      : " No data into cart!"
    }
    
  </div>
  <div><h5>Cart Subtotal {cartTotal}</h5></div>
  <div><h5>Discount Amount {discoutAmount}</h5></div>

  
  <div><h5>Order Total {couponCodeAmount}</h5></div>
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
