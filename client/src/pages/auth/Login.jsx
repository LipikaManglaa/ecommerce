import React, { useState } from 'react'
import './../../styles/SignUp.css'
import Layout from '../../layout/Layout'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
export default function Login() {
  let [email, setEmail] = useState("")
  let [password, setPassword] = useState("")
  let navigate = useNavigate()

  let handleSubmit = async (e) => {
  e.preventDefault()
 
    try {
      const res = await axios.post(`http://localhost:5000/api/auth/login`, {
        email,
        password,
      });
    
      console.log(res)
      if (res.data.sucess) {
        toast.success(res.data.message, { autoClose: 1000 });
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
              <span className="errorContainer">Please enter a valid email</span>
            </div>
            <div className="form-group">
              <input type="password" placeholder="password" value={password}
                onChange={(e) => setPassword(e.target.value)} />
              <span className="errorContainer">Please enter a valid password</span>
            </div>


            <div>
              <button type="submit" className="submitBottomOption">Submit</button>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  )
}
