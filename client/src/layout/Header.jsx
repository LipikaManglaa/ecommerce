import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './../styles/Header.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logoheader from './../images/logoheader.png'

import { faBagShopping, faBars, faClose, faHeart, faUser } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from '../context/auth';

import { toast } from 'react-toastify';
import axios from 'axios';
export default function Header() {
  

  const [auth, setAuth] = useAuth()
  const [headerData,setHeaderData]=useState([])
let[active,setActive]=useState(false)
let [activeUserMenu,setActiveUserMenu]=useState(false)

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
 
      axios.get(`/api/get-category`)
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

  <div >
    <ul className={`headerData-list ${active ? "activeheaderlist" : ""}`}>
      {
      
        headerData.length>0 ? 
        
   headerData.map((v,i)=>{
   
  
    return(
      <li className="showsubitems headerData-list-inner" key={i}>
        
              
        <Link to={`/category/`+v.category.slug}>{v.category.name}</Link>
      <div className="subMenu" />
      <div className="submenylist">
        
     {/* <SubCategory subcatgoryList={v.subcategories}/> */}

      
        
     </div>
    </li>
    )
   })
          
     
        :""
      
}
     
    </ul>
  </div>
 
  <div className="menuright">

    <div className="profilemenu">
    {
            !auth?.user ? (
            <div className="btn-login  menulistmobiledesktop"><Link to="/signup"> Signup &nbsp; </Link>  <Link to="/login">login</Link></div>
            ) : (
              <div className="btn-login  menulistmobiledesktop"><Link to={`/user-dashboard`}> Dashboard &nbsp;</Link>  <Link to="/login" onClick={handleLogout}>logout</Link></div>
)}
      <FontAwesomeIcon className="submenulistitemss" icon={faUser} onClick={()=>setActiveUserMenu(!activeUserMenu)}/>
      <h3 >Profile
       
      
          
          <div className="subMenu submeny-color4" ></div>
          <div className="submenylist submneuliststudio" >
          <div className={`list-item list-item-profile ${(activeUserMenu )? "userDashboardShow" : ""}`}>
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
  
    <div className="profilemenu">

    <Link to={'/cart'}>
      <FontAwesomeIcon icon={faBagShopping} className='cartlistmenu'/>
   
      <h3>Bag{auth.cartItem}</h3></Link>
    </div>
   
  </div>
  <div>
    <FontAwesomeIcon icon  ={  active ? faClose : faBars  }  onClick={dispalyMenu} className='header-bar'/>
    
 
  </div>
</header>
</div>

    )
}




