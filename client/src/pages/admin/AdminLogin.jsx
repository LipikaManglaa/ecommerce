
  import React from 'react'
  import './AdminLogin.css'
  export default function AdminLogin() {

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
          <div className="field">
            <label>Username</label>
            <div className="ui left icon input">
              <input type="text" placeholder="Username" />
              <i className="user icon" />
            </div>
          </div>
          <div className="field">
            <label>Password</label>
            <div className="ui left icon input">
              <input type="password" />
              <i className="lock icon" />
            </div>
          </div>
          <div className="ui blue submit button">Login</div>
        </div>
      </div>
    </div>
  </div>
  )
  }

