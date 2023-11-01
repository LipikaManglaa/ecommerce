import React, { useEffect, useState } from 'react'
import Layout from '../layout/Layout'
import { useNavigate, useParams } from 'react-router-dom'
import axios, { Axios } from 'axios'
import './../styles/ProductDetail.css'
import { useAuth } from '../context/auth'
import { toast } from 'react-toastify'

export default function ProductDetails() {
 
  let data=useParams()
  
   let[datadata,setData]=useState({})
   let [cart, setCart] = useState()
   let [auth, setAuth] = useAuth()
   let navigate=useNavigate()
 
//for redirect
   let userData = JSON.parse(localStorage.getItem("auth")) ?? []

   if (userData.length === 0) {
       window.location = "/login"
   }

   let getproductList = async () => {

   
    axios.get(`/api/single-product/${data.slug}`)
    .then((res)=>{
      setData(res.data.product)
    
    })
   
   }


   let handleCart = (productId) => {

    if (auth.token === "") {
      toast.success("Please Login first! Then you can add your item into cart", { autoClose: 700 });
      setTimeout(() => {
         navigate('/login')
      }, 1500)
    }
    else {
      let user = JSON.parse(localStorage.getItem("auth"))
      let userId = user.user.id;
      let qty = 1;
      axios.post(`/api/cart`,
        {
          userId,
          qty,
          productId
        }
      ).then((res) => {
        console.log(res)
  
        setCart(res.data)
      })


    }



  }

   useEffect(()=>{
    getproductList()
   },[data.slug])
  return (
   <>
   <Layout>
  <section>
    <div className='list-product'>
      <h1>Product Details</h1>
      <div className='item-list'>
        <div className='list-cat'>
        <div className='pr-image'>
          <img src={`/`+datadata.image}/>
        </div>
        <div className='pr0-cat-lisr'>
          <h3><span>Product Name:</span> &nbsp;{datadata.name}</h3>
          <h5><span>Product Price:</span>&nbsp;{datadata.price}</h5>
          <p><span>Product Description:</span>{datadata.description}</p>
          <button class="wbtn" onClick={() => handleCart(datadata._id)}>Add to Cart</button>
        </div>
        </div>
      </div>
    </div>
  </section>

   </Layout>
   </>
  )
}

