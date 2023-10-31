import React, { useEffect, useState } from 'react'
import Layout from '../layout/Layout'
import axios from 'axios'
import { useAuth } from '../context/auth'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import './../styles/Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export default function Cart() {  
  let[auth,setAuth]=useAuth()
  let[cartD,setCartD]=useState([])
  let [cartTotal,setCartTotal]=useState(0)
  let[couponCodeAmount,setCouponCodeAmount]=useState(0)
  let[discoutAmount ,setDiscountAmount]=useState(0)
  let[discountPercentage,setDiscountPercentage]=useState(0)
  let[qty,setQty]=useState()
  let userId;

  let userData=JSON.parse(localStorage.getItem("auth"))  ?? []
  if(userData.length === 0){
     window.location="/login"
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
          console.log(discount_amount)
          setDiscountPercentage(totalPer)
          setDiscountAmount(discount_amount)
           setCouponCodeAmount(total-discount_amount);
        }
        else{
          setCouponCodeAmount(total)
        }
    
    })
  }

  
  //coupon check
  let handleCoupon=(e)=>{
    e.preventDefault();
    let checkCode=e.target.coupon_code.value
     let totalAmount=cartTotal

  axios.post(`/api/check-coupon`,{
    checkCode
  })
  .then((res)=>{
    if(res.data.success==false){
toast.error(res.data.message,{autoClose:1000})
    }
    else{
      if(totalAmount>=res.data.coupon.minimum_amout_order){
        let totalPer=Number(res.data.coupon.discount_amount);
        let discount_amount=totalAmount*totalPer/100
        setCouponCodeAmount(totalAmount-discount_amount);
        localStorage.setItem("coupon",JSON.stringify([res.data.coupon]))
      }
      else{
        toast.error("youe total amount can not react to get discount")
      }
    }
  })
}

  useEffect(()=>{
    getCartData()
  },[])

  return (
  <>
  <Layout>

<section>
  <div className='cart-list'>
    <div className='cart-inner'>
      <div className='cart-items'>
        <div className='cart-shop'>
          <h2>Shopping Cart</h2>
          <h2>Items{cartD.length}</h2>
        </div>
        <table>
          <thead>
            <td>Sr.No</td>
            <td>Image</td>
            <td>Name</td>
            <td>Price</td>
            <td>Qty</td>
            <td>Delete</td>
            <td>Total</td>
          </thead>
          <tbody>
            
          {
            cartD.length>0  ?
cartD.map((v,i)=>{

 return( 
                <Cartrow v={v} i={i} key={i} getCartData={getCartData}/>
           
             )
            })
                        : "No data into cart!"
                      }
          </tbody>
        </table>
        
          <div className='con-shopping'>
          <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
          <p><Link to={'/'}>Continue Shopping</Link></p>
          </div>

       
      </div>
<div className='cart-right'>
  <h2>Order Summary</h2>
  <div className="cart-shop-items">
          <h2>Items{cartD.length}</h2>
          <h2>{cartTotal}</h2>
        </div>
        <div className='promocode'>
        <form onSubmit={handleCoupon}>
          <label>Promo Code</label>
          <input type='text' placeholder='Enter your Promo code' name="coupon_code"/>
          <button type='submit' class="wbtn" style={{marginTop:'0px'}}>Apply</button>
          </form>
        </div>
        <div className=' cart-shop-items'>
          <h2>Discount</h2>
          <h2>{discountPercentage}%</h2>
        </div>
        <div className='cart-shop-items'>
          <h2>Coupon Amount</h2>
          <h2>{discoutAmount}</h2>
        </div>
        
        <div className='cart-shop-items'>
          <h2>Total cost</h2>
          <h2>{couponCodeAmount}</h2>
        </div>
        <button class="wbtn" style={{width:'100'}}><Link to={'/checkout'}>Checkout</Link></button>
</div>
    </div>
  </div>
</section>





  </Layout>
  </>
  )
}
let Cartrow=({v,i,getCartData})=>{

  let [qty,setQty]=useState(v.qty);
  //qty
  let handleValue=(e)=>{
   

    setQty(e.target.value)
    let updateId=v._id;
    let qtyNew=e.target.value;
axios.post(`/api/cart-update/${updateId}`,{
  qty:qtyNew
})
.then((res)=>{
  
  toast.success(res.data.message,{autoClose:1000})
  
getCartData();
})

  
    }


      //delete 
  let handleDelete=async(delId)=>{

    try {
      const { data } = await axios.delete(
        `/api/cart-delete/${delId}`
      );
     
      if (data.success) {
        toast.success(`cart data is deleted`,{autoClose:1000});
        getCartData()
       
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Somtihing went wrong");
    }
      }
return(

  <tr key={i}>
  <td>{i+1}</td> 
  <td> <img className="img-cart" src={`/`+v.image} alt="" style={{width:'100px'}}/></td>
  <td>{v.name}</td>
  <td>{v.amount}</td>
<td><input type='number'className='input-qty' min={1} max={5} value={qty}   onChange={handleValue}/></td>
<td onClick={()=>handleDelete(v._id)}><FontAwesomeIcon icon={faTrash}/></td>
<td >{v.qty*v.amount}</td>
</tr>
)
}