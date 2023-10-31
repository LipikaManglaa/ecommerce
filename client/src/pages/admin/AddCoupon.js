import React, { useState } from 'react'
import Sidebar from './common/Sidebar'
import axios from 'axios'
import { toast } from 'react-toastify'

export default function AddCoupon() {
  let [coupon_code,setCouponCode]=useState("")
  let [type,setType]=useState("")
  let [discount_amount,setDiscountAmount]=useState("")
  let [expiry_date, setExpiryDate]=useState("")
  let [minimum_amout_order,setMinimumAmountOrder]=useState("")

  let handleSubmit=async(e)=>{
    e.preventDefault()
    var d = new Date(expiry_date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) 
    month = '0' + month;
  if (day.length < 2) 
    day = '0' + day;

 let dataExpire=[year, month, day].join('-');

    try {
      const { data } =await axios.post("/api/create-coupon", {
        coupon_code,
        type,
        discount_amount,
        expiry_date:dataExpire,
        minimum_amout_order
          });
        
      console.log(data)
      if (data?.success) {
        toast.success(`${type} is created`);
        
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
     toast.error("somthing went wrong to add coupon");
    }
  
  }
  return (
  <>
   <Sidebar/>
    <div className="">
        <h2 className="text-center text-blue-400 font-bold text-2xl uppercase mb-10">Add Coupon</h2>
        <div className="bg-white p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <label  className="block mb-2 font-bold text-gray-600" >Coupon Code</label>
              <input type="text" name='coupon_code'  onChange={(e) => setCouponCode(e.target.value)} value={coupon_code} className="border border-gray-300 shadow p-3 w-full rounded mb-"  />
            </div>
            <div className="mb-5">
              <label  className="block mb-2 font-bold text-gray-600" >Type</label>
              <input type="text" name='type'  value={type} onChange={(e) => setType(e.target.value)} rows={4} className="border border-gray-300 shadow p-3 w-full rounded mb-"/>
            
            </div>
            <div className="mb-5">
              <label  className="block mb-2 font-bold text-gray-600" > Discount  Amount</label>
              <input type="number" name='discount_amount'  value={discount_amount} onChange={(e) => setDiscountAmount(e.target.value)} rows={4} className="border border-gray-300 shadow p-3 w-full rounded mb-" />
            
            </div>
            <div className="mb-5">
              <label  className="block mb-2 font-bold text-gray-600" > Expire Date</label>
              <input type='date' name='expiry_date' value={expiry_date} onChange={(e) => setExpiryDate(e.target.value)} rows={4} className="border border-gray-300 shadow p-3 w-full rounded mb-" />
            
            </div>
            <div className="mb-5">
              <label  className="block mb-2 font-bold text-gray-600" > Minimum Amount Order</label>
              <input type="number" name='minimum_amout_order'  value={minimum_amout_order} onChange={(e) => setMinimumAmountOrder(e.target.value)} rows={4} className="border border-gray-300 shadow p-3 w-full rounded mb-" />
            
            </div>
          
            <button type='submit' className="block w-full bg-blue-500 text-white font-bold p-4 rounded-lg">Submit</button>
          </form>
        </div>
      </div>
    </>
  )
}

  