import React, { useState } from 'react'
import './../../styles/SignUp.css'
import Layout from '../../layout/Layout'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useAuth } from '../../context/auth'
// import { useAuth } from '../../context/auth'
export default function Login() {
  const baseURL = process.env.REACT_APP_API_BASE_URL_DEV
  let [email, setEmail] = useState("")
  let [password, setPassword] = useState("")
 let [auth,setAuth]=useAuth()
  let navigate = useNavigate()
// console.log(auth)
  let handleSubmit = async (e) => {
  e.preventDefault()
 
    try {
      const res = await axios.post(`${baseURL}/api/login`, {
        email,
        password,
      });
    
     
      
      if (res.data.sucess) {
        toast.success(res.data.message, { autoClose: 1000 });
        setAuth({
         
          user: res.data.user.name,
          token: res.data.token,
          id:res.data.user.id,
          cartItem:res.data.cartItem,
        });
         localStorage.setItem("auth", JSON.stringify(res.data));
        setTimeout(() => {
navigate('/')
        }, 2000)
      }
     }

    catch (error) {
      toast.error("something wrong", { autoClose: 1000 })
    }
  
  }
  return (
    <Layout>
      <section className="login-heads">
        <div className="login-title">
          <div className="welcome-header">
            Login <span className="welcome-header-span"></span>
          </div>
          <form onSubmit={handleSubmit}>

            <div className="form-group">
              <input type="email" placeholder="Email" value={email}
                onChange={(e) => setEmail(e.target.value)} />
            
            </div>
            <div className="form-group">
              <input type="password" placeholder="password" value={password}
                onChange={(e) => setPassword(e.target.value)} />
           
            </div>


            <div>
              <button type="submit" className="submitBottomOption">Submit</button>
            </div>
            <div><p><Link to={'/signUp'}>Please Sign Up here!</Link>If you are not login!</p></div>
          </form>
        </div>
      </section>
    </Layout>
  )
}
