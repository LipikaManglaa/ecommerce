import { faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

export default function UserProfile() {
  return (
    <div className='user-dashboard'>
    <div className='user-dashboard-inner'>
        <div className='user-dash-head'>
            <div className='user-dash-left'>
                <ul>
                    <li className='menu-heading'><Link>Dashboard</Link></li>
                    <li className='menu-order'><FontAwesomeIcon icon={faHome}/><Link>Transaction</Link></li>
                    <li className='menu-order'><FontAwesomeIcon icon={faHome}/><Link>Transaction</Link></li>
                    <li className='menu-order'><FontAwesomeIcon icon={faHome}/><Link>Transaction</Link></li>
                    <li className='menu-order'><FontAwesomeIcon icon={faHome}/><Link>Transaction</Link></li>
                    <li className='menu-order'><FontAwesomeIcon icon={faHome}/><Link>Transaction</Link></li>
                </ul>
            </div>
            <div className='user-dash-right'>
                <div className='right-user-profile'>
                    <h3>User Profile</h3>
                    <div className='user-fa'>
                    <FontAwesomeIcon icon={faUser}/>
                    <div className='sub-menu'>
                        <ul><li><Link to={'/user-dashboard-profile'}>Profile</Link></li>

                        <li>Profile</li></ul>
                    </div>
                    </div>
                    </div>

                    <div className='user-head-list'>
                        <div className='profile-user-items'>
                          <form>
                           
                            <div className='user-form'>
                              <label>Name</label>
                              <input type='name' placeholder='Your Name'/>
                            </div>
                            <div className='user-form'>
                              <label>Email</label>
                              <input type='email' placeholder='Your Email'/>
                            </div>
                            <div className='user-form'>
                              <label>Password</label>
                              <input type='text' placeholder='Your Password'/>
                            </div>
                            <div className='user-form'>
                              <label>Phone</label>
                              <input type='number' placeholder='Your Phone'/>
                            </div>
                            <button type='submit' className='btn-update'>Update</button>
                          </form>
                        </div>
                  
                </div>
            </div>
        </div>
    </div>
   </div>
  )
}
