import React, { useState } from 'react'
import  './../../styles/SignUp.css'
import Layout from '../../layout/Layout'
import { toast } from 'react-toastify'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

export default function SignUp() {
let navigate=useNavigate()
    let[name,setName]=useState("")
    let[email,setEmail]=useState("")
    let[password,setPassword]=useState("")
    let[phone,setPhone]=useState("")

    let handleSubmit= async (e) =>{
      e.preventDefault();
      try{
      const res=await axios.post(`/api/register`,{
          name,email,password,phone
        })
       
        if (res.data.success) {
          toast.success(res.data.message,{autoClose:1000});
          setName("")
          setEmail("")
          setPassword("")
          setPhone("")
          setTimeout(()=>{
            navigate("/login");
          },2000)
         
        } else {
          toast.error(res.data.message);
        }

      }catch(error){
        console.log(error)
      }
    }
  return (
    <Layout>
    <section className="login-heads">
    <div className="login-title">
      <div className="welcome-header">
        Login <span className="welcome-header-span">or</span> Signup
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input type="text" placeholder="User Name"  name='name'  value={name}
              onChange={(e) => setName(e.target.value)}/>
        
        </div>
        <div className="form-group">
          <input type="email" placeholder="Email" name='email'  value={email}
              onChange={(e) => setEmail(e.target.value)} />
          
        </div>
        <div className="form-group">
          <input type="password" placeholder="password" name='password'  value={password}
              onChange={(e) => setPassword(e.target.value)}/>
         
        </div>
        <div className="form-group">
          <input type="tel" placeholder="Mobile Number" name='phone'  value={phone}
              onChange={(e) => setPhone(e.target.value)}/>
         
        </div>
        {/* <div className="form-group">
          <input type="text" placeholder="Address" name="address" />
          <span className="errorContainer">Please enter a valid address</span>
        </div> */}
       
        <div>
          <button type='submit' className="submitBottomOption">Submit</button>
        </div>
        <div>
        <div><p><Link to={'/login'}>Please Sign Up here!</Link>If you are not login!</p></div>
        </div>
      </form>
    </div>
  </section>
  </Layout>
  )
}



