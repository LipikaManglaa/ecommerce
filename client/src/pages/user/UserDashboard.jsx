
  import React from 'react'

import Sidebar from './layout/Sidebar';
import './layout/Sidebar.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser } from '@fortawesome/free-solid-svg-icons';
  export default function UserDashboard() {
   
    let userData=JSON.parse(localStorage.getItem("auth"))  ?? []
console.log(userData)
if(userData.length === 0){
   window.location="/login"
 }
  return (
<>
<div className='user-dashboard'>
    <div className='user-dashboard-inner'>
        <div className='user-dash-head'>
            <div className='user-dash-left'>
                <ul>
                    <li className='menu-heading'><Link>Dashboard</Link></li>
                    <li className='menu-order'><FontAwesomeIcon icon={faHome}/><Link>Transaction</Link></li>
                    <li className='menu-order'><FontAwesomeIcon icon={faHome}/><Link>Order History</Link></li>
                    <li className='menu-order'><FontAwesomeIcon icon={faHome}/><Link>Transaction</Link></li>
                    <li className='menu-order'><FontAwesomeIcon icon={faHome}/><Link>Transaction</Link></li>
                    <li className='menu-order'><FontAwesomeIcon icon={faHome}/><Link>Transaction</Link></li>
                </ul>
            </div>
            <div className='user-dash-right'>
                <div className='right-user-profile'>
                    <h3>User Profile</h3>
                    <div className='user-fa'>
                    <Link to={'/user-profile'}> <FontAwesomeIcon icon={faUser}/></Link> 
                    {/* <div className='sub-menu-user-list'>
                        <ul><li><Link to={'/user-dashboard-profile'}>Profile</Link></li>

                        <li>Profile</li></ul>
                    </div> */}
                    </div>
                    </div>

                    <div className='user-head-list'>
                        <div className='profile-user-items'>
                           
                        </div>
                  
                </div>
            </div>
        </div>
    </div>
   </div>

  </>
  )
}

