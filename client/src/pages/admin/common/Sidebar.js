import React, { useState } from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'




export default function Sidebar() {
    let [open,setopen]=useState(false)
    let [open1,setopen1]=useState(false)
    let [open2,setopen2]=useState(false)
    let [open3,setopen3]=useState(false)
    let handleOpen=()=>{
       setopen(!open)
          }
    let handleOpen1=()=>{
           setopen1(!open1)
       }
       let handleOpen2=()=>{
        setopen2(!open2)
    }
    let handleOpen3=()=>{
      setopen3(!open3)
  }
   let logout=()=>{
    
   }
  return (
    <>
      
    <div className='grid grid-cols-[30%_auto]'>
        <div>
  <span className="absolute text-white text-4xl top-5 left-4 cursor-pointer" >
    <i className="bi bi-filter-left px-2 bg-gray-900 rounded-md" />
  </span>
  <div className="sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-900">
    <div className="text-gray-100 text-xl">
      <div className="p-2.5 mt-1 flex items-center">
        <i className="bi bi-app-indicator px-2 py-1 rounded-md bg-blue-600" />
        <h1 className="font-bold text-gray-200 text-[15px] ml-3">Ecommerce</h1>
        <i className="bi bi-x cursor-pointer ml-28 lg:hidden" />
      </div>
      <div className="my-2 bg-gray-600 h-[1px]" />
    </div>
  
  
    <div className="my-4 bg-gray-600 h-[1px]" />
    <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white" >
      <i className="bi bi-chat-left-text-fill" />
      <div className="flex justify-between w-full items-center" >
        <span className="text-[15px] ml-4 text-gray-200 font-bold" onClick={handleOpen} >Category</span>
        <span className="text-sm rotate-180" id="arrow" >
                 </span>
      </div>
    </div>
    {open ? 
    <div className="text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold" id="submenu">
      <h1 className="cursor-pointer p-2  rounded-md mt-1">
    <Link to={'/admin/addCategory'}>Add Category</Link> 
      </h1>
      <h1 className="cursor-pointer p-2  rounded-md mt-1">
      <Link to={'/admin/viewCategory'}>View CAtegory</Link> 
      </h1>
    
    </div>
    : ""
}

<div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white" onclick="dropdown()">
      <i className="bi bi-chat-left-text-fill" />
      <div className="flex justify-between w-full items-center" >
        <span className="text-[15px] ml-4 text-gray-200 font-bold" onClick={handleOpen1} >Sub Category</span>
        <span className="text-sm rotate-180" id="arrow" >
          
         
        </span>
      </div>
    </div>
    {open1 ? 
    <div className="text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold" id="submenu">
      <h1 className="cursor-pointer p-2  rounded-md mt-1">
    <Link to={'/admin/addSubCategory'}>Add Sub Category</Link> 
      </h1>
      <h1 className="cursor-pointer p-2  rounded-md mt-1">
      <Link to={'/admin/viewSubCategory'}>View Sub Category</Link> 
      </h1>
    
    </div>
    : ""
}
<div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white" onclick="dropdown()">
      <i className="bi bi-chat-left-text-fill" />
      <div className="flex justify-between w-full items-center" >
        <span className="text-[15px] ml-4 text-gray-200 font-bold" onClick={handleOpen2} >Product</span>
        <span className="text-sm rotate-180" id="arrow" >
         
         
        </span>
      </div>
    </div>
    {open2 ? 
    <div className="text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold" id="submenu">
      <h1 className="cursor-pointer p-2  rounded-md mt-1">
    <Link to={'/admin/addProduct'}>Add Product</Link> 
      </h1>
      <h1 className="cursor-pointer p-2  rounded-md mt-1">
      <Link to={'/admin/viewProduct'}>View Product</Link> 
      </h1>
    
    </div>
    : ""
}
<div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white" onclick="dropdown()">
      <i className="bi bi-chat-left-text-fill" />
      <div className="flex justify-between w-full items-center" >
        <span className="text-[15px] ml-4 text-gray-200 font-bold" onClick={handleOpen3} >Coupon</span>
        <span className="text-sm rotate-180" id="arrow" >
         
         
        </span>
      </div>
    </div>
    {open3 ? 
    <div className="text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold" id="submenu">
      <h1 className="cursor-pointer p-2  rounded-md mt-1">
    <Link to={'/admin/addCoupon'}>Add Coupon</Link> 
      </h1>
      <h1 className="cursor-pointer p-2  rounded-md mt-1">
      <Link to={'/admin/viewCoupon'}>View Coupon</Link> 
      </h1>
    
    </div>
    : ""
}

   

<div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white" >
      <i className="bi bi-chat-left-text-fill" />
      <div className="flex justify-between w-full items-center" >
        <span className="text-[15px] ml-4 text-gray-200 font-bold" ><Link to={'/admin/ViewUser'}>View User</Link> </span>
        <span className="text-sm rotate-180" id="arrow" >
         
         
        </span>
      </div>
    </div>
  

   
   
  </div>
  </div>
<div className='flex justify-end items-center pr-[40px] gap-3'>
<div>
        {/* <ul>
        <li class="relative max-w-fit pr-3 md:pr-0 py-1 font-bold cursor-pointer "><Link to={'/admin/changepassword'}>Profile</Link></li>
        </ul> */}
      </div>
      <div class="flex items-center gap-2">
        <button type="button" class=" bg-gray-900  border-solid border-2   font-bold text-white px-5 py-2 rounded-full " onClick={logout}>Logout</button>
        <ion-icon name="menu" onclick="onMenuToggle(this)" class="text-[30px] cursor-pointer md:hidden"></ion-icon>
      </div>
</div>
</div>
    </>
  )
}
