
import React, { useEffect } from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../../context/auth';
import { toast } from 'react-toastify'
import { useState } from 'react'
import axios from 'axios';

export default function UserProfile() {
  const baseURL = process.env.REACT_APP_API_BASE_URL_DEV
  let user= JSON.parse(localStorage.getItem("auth")) ?? []

  if (user.length === 0) {
    window.location = "/login"
  }

  const [auth, setAuth] = useAuth();
  //state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");


  //get user data
  useEffect(() => {
    const {  name, phone } = auth?.user;
    setName(name);
    setPhone(phone);
   

  }, [auth?.user]);

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {


      let userId = user.user._id

      const { data } = await axios.put(`/api/profile/${userId}`, {
        name,
        email,
        password,
        phone,

      });
      if (data?.errro) {
        toast.error(data?.error);
      } else {
        setAuth({ ...auth, user: data?.updatedUser });
        let ls = localStorage.getItem("auth");
        ls = JSON.parse(ls);
        ls.user = data.updatedUser;
        localStorage.setItem("auth", JSON.stringify(ls));
        toast.success("Profile Updated Successfully");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };




  return (
    <>
      <div className='user-dashboard'>
        <div className='user-dashboard-inner'>
          <div className='user-dash-head'>
            <div className='user-dash-left'>
              <ul>
                <li className='menu-heading'><Link>Dashboard</Link></li>
                <li className='menu-order'><Link to={'/user-dashboard'} ><FontAwesomeIcon icon={faHome} style={{ marginRight: '10' }} />Transaction</Link></li>
                <li className='menu-order'><FontAwesomeIcon icon={faHome} style={{ marginRight: '10' }} /><Link>Order History</Link></li>

              </ul>
            </div>
            <div className='user-dash-right'>
              <div className='right-user-profile'>
                <h3>User Profile</h3>
                <div className='user-fa'>
                  <Link to={'/user-profile'}> <FontAwesomeIcon icon={faUser} /></Link>

                </div>
              </div>

              <div className='user-head-list'>
                <div className='profile-user-items'>


                  <form onSubmit={handleSubmit}>

                    <div className='user-form'>
                      <label>Name</label>
                      <input type='name' placeholder='Your Name' value={name}
                        onChange={(e) => setName(e.target.value)} />
                    </div>

                    <div className='user-form'>
                      <label>Password</label>
                      <input type='text' placeholder='Your Password' value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className='user-form'>
                      <label>Phone</label>
                      <input type='number' placeholder='Your Phone' value={phone}
                        onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <button type='submit' className='btn-update'>Update</button>
                  </form>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

