
import React, { useState } from 'react'
import './AdminLogin.css'
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
            <img className="ui fluid image" src="banner.jpg" />
          </div>
        </div>
        <div className="column admin-login">
          <div className="ui form">
            <h3 className>Login</h3>
            <form onSubmit={handleSubmit}>
              <div className="field">
                <label>Username</label>
                <div className="ui left icon input">
                  <input type="text" placeholder="Username" value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                  <i className="user icon" />
                </div>
              </div>
              <div className="field">
                <label>Password</label>
                <div className="ui left icon input">
                  <input type="password" value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                  <i className="lock icon" />
                </div>
              </div>
              <div  type="submit" className="ui blue submit button">Login</div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

