import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Sidebar from './common/Sidebar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { toast } from 'react-toastify'


export default function ViewCoupon() {
  const baseURL = process.env.REACT_APP_API_BASE_URL_DEV
  let [coupon,setCoupon]=useState([])
  function viewCoupon(){
    axios.get(`${baseURL}/api/get-coupon`)
    .then((res)=>{
     
      setCoupon(res.data.coupon)
    })
  }
 
  //delete coupon
  let handleDelete=async(pid)=>{
    try {
        const { data } = await axios.delete(
          `${baseURL}/api/delete-coupon/${pid}`
        );
        if (data.success) {
          toast.success(`coupon is deleted`);
  
          viewCoupon();
        } else {
          toast.error(data.message);
        }
      } catch (error) {
        toast.error("Somtihing went wrong");
      }
    };
    
  useEffect(()=>{
    viewCoupon()
  },[])
  return (
   <>
    <Sidebar/>
    <div className="">
         <h2 className="text-center text-blue-400 font-bold text-2xl uppercase mb-10">View Coupon</h2>
         <div className="bg-white p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
         <table className=" text-sm text-gray-400">
                 <thead className="bg-gray-800 text-xs uppercase font-medium">
                   <tr>
                     
                     <th scope="col" className="px-6 py-3 text-left tracking-wider">
                       Sr. No
                     </th>
                     <th scope="col" className="px-6 py-3 text-left tracking-wider">
                     coupon_code
                     </th>
                     <th scope="col" className="px-6 py-3 text-left tracking-wider">
                    Type
                     </th>
                     <th scope="col" className="px-6 py-3 text-left tracking-wider">
                   Discount  Amount
                     </th>
                     <th scope="col" className="px-6 py-3 text-left tracking-wider">
                   Expirt Date
                     </th>
                     <th scope="col" className="px-6 py-3 text-left tracking-wider">
                  Minimun Amount Order
                     </th>
                     <th scope="col" className="px-6 py-3 text-left tracking-wider">
                    Delete
                  </th>
                   
                  
                   </tr>
                 </thead>
                 <tbody className="bg-gray-800">
                {
                  coupon.length>0  ? 
                  coupon.map((v,i)=>{
                    return(
                      <tr key={i}>
                        <td className=" px-6 py-4 whitespace-nowrap" >
                    {i+1}
                 </td>
                   <td className=" px-6 py-4 whitespace-nowrap" >
                    {v.coupon_code}
                 </td>
                 <td className=" px-6 py-4 whitespace-nowrap" >
                    {v.type}
                 </td>
                 <td className=" px-6 py-4 whitespace-nowrap" >
                    {v.discount_amount}
                 </td>
                 <td className=" px-6 py-4 whitespace-nowrap" >
                    {v.expiry_date}
                 </td>
                 <td className=" px-6 py-4 whitespace-nowrap" >
                    {v.minimum_amout_order}
                 </td>
                
                 <td className=" px-6 py-4 whitespace-nowrap"  onClick={() => { handleDelete(v._id); }}>
                <FontAwesomeIcon icon={faTrash}/>
                </td>
                      </tr>
                    )
                  })
           
                  : "No Coupon"
                
                  
                }
                
               
               
                 </tbody>
               </table>
         </div>
       </div>
       
</>
    
     )
     }