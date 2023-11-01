
import React, { useState } from 'react'
import './AdminLogin.css'
import adminImage from './../../images/adminImage.jpg'
import axios from 'axios'
import { toast } from 'react-toastify'
export default function AdminLogin() {
  let [email, setEmail] = useState("")
  let [password, setPassword] = useState("")
  let handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      const res = await axios.post(`/api/login`, {
        email,
        password,
      });

      if (res.data.sucess) {
        toast.success(res.data.message, { autoClose: 1000 });
      }
    }

    catch (error) {
      toast.error("something wrong", { autoClose: 1000 })
    }
  }

  return (
    <div className="ui placeholder">
      <div className="ui two column  stackable grid">
        <div className="middle column admin-banner">
          <div className="ui big button admin-banner-inner">
            <img className="ui fluid image" src={adminImage} />
          </div>
        </div>
        <div className="column admin-login">
          <div className="ui form">
            <h3 className="login-style">Login</h3>
            <form onSubmit={handleSubmit}>
              <div className="field">
                <label>Username</label>
                <div className="ui left icon input">
                  <input type="text" placeholder="Username" value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                
                </div>
              </div>
              <div className="field">
                <label>Password</label>
                <div className="ui left icon input inputpassword">
                  <input type="password" value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                  
                </div>
              </div>
              <button   type="submit" className="ui blue adminBtn submit button">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

