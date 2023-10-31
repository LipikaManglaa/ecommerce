import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './../styles/Header.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logoheader from './../images/logoheader.png'

import { faBagShopping, faBars, faHeart, faUser } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from '../context/auth';

import { toast } from 'react-toastify';
import axios from 'axios';
export default function Header() {
  
  const baseURL = process.env.REACT_APP_API_BASE_URL_DEV
  const [auth, setAuth] = useAuth()
  const [headerData,setHeaderData]=useState([])
let[active,setActive]=useState(false)
 
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
      cartItem:0,
    });
    localStorage.removeItem("auth");
    localStorage.clear();
    toast.success("Logout Successfully");
  };


  let dispalyMenu=()=>{

    setActive(!active)
  }
  const getallData =  () => {
 
      axios.get(`${baseURL}/api/get-category`)
    .then((res)=>res.data)
    .then((finalData)=>{
     console.log(finalData)
      setHeaderData(finalData.finalresult)

   
    })
      
    };
  

useEffect(()=>{
getallData()

},[])

    return (
      <div class="main">
     <header>

  <div className="logo">
    <img src={logoheader} style={{paddingBottom:'10px'}}/>
  </div>

  <div  className={active ? "activemenumobile" : "menu"}>
    <ul>
      {
      
        headerData.length>0 ? 
        
   headerData.map((v,i)=>{
    
  
    return(
      <li className="showsubitems" key={i}>
        
              
        <Link to={`/category/`+v.category.slug}>{v.category.name}</Link>
      <div className="subMenu" />
      <div className="submenylist">
        
     <SubCategory subcatgoryList={v.subcategories}/>

      
        
      </div>
    </li>
    )
   })
          
     
        :""
      
}
     
    </ul>
  </div>
 
  <div className="menuright">
    {/* <div className="serachmenu">
      <input type="search" placeholder="Search for products,brands and more" />
      <i className="fa-solid fa-magnifying-glass" />
    </div> */}
    <div className="profilemenu">

      <FontAwesomeIcon icon={faUser}/>
      <h3 >Profile
       
      
          
          <div className="subMenu submeny-color4" ></div>
          <div className="submenylist submneuliststudio" >
          <div className="list-item list-item-profile">
            <h3>Welcome</h3>
            <span>To access account and manage orders</span>
            {
            !auth?.user ? (
            <div className="btn-login"><Link to="/signup"> Signup &nbsp; /</Link>  <Link to="/login">login</Link></div>
            ) : (
              <div className="btn-login"><Link to={`/user-dashboard`}> Dashboard &nbsp; /</Link>  <Link to="/login" onClick={handleLogout}>logout</Link></div>
)}
            <ul>
              <li><Link to={'/Checkout'}>Orders</Link></li>
              <li><Link to={'/wishlist'}>WishList</Link></li>
            
              <li><Link to={'/cart'}>Coupons</Link></li>
            </ul>
          </div>
        </div>
       
       </h3>
    </div>
    {/* <div className="profilemenu">
    <FontAwesomeIcon icon={faHeart} />
      <i className="fa-regular fa-heart" />
      <h3><Link to={'/Wishlist'}>Wishlist</Link></h3>
    </div> */}
    <div className="profilemenu">

    <Link to={'/cart'}>
      <FontAwesomeIcon icon={faBagShopping}/>
   
      <h3>Bag{auth.cartItem}</h3></Link>
    </div>
   
  </div>
  <div>
    <FontAwesomeIcon icon={faBars}  onClick={dispalyMenu} className='header-bar'/>
    
 
  </div>
</header>
</div>

    )
}




function SubCategory({subcatgoryList}){ 

    return (
      <>
      {
        subcatgoryList.length>0 ?
subcatgoryList.map((value,index)=>{
  return(
    <div className="sub-list-item " key={index} >
    <div className="list-item">
    
      <h3>{value.subcategory.name}</h3>
      <ul className="sub-menu">
<ProductMenu productList={value.products}/>
        
       
      </ul>
    </div>
    
  </div>
  )
})

        : ""
      }
     
      
      </>
    )
}

function ProductMenu({productList}){
  
  return(
<>    {

productList.length>0 ?
productList.map((v,i)=>{
  return(
    <li key={i}> <Link to={'/'}>{v.name}</Link></li>
  )
})

:""
    }
</>
  )
}