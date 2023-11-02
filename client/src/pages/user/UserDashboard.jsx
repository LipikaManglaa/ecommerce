
import React, { useEffect, useState } from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios'
export default function UserDashboard() {
    
    let [order, setOrder] = useState([])

    let userData = JSON.parse(localStorage.getItem("auth")) ?? []

    if (userData.length === 0) {
        window.location = "/login"
    }


    let orderCheck = () => {
        let user = JSON.parse(localStorage.getItem("auth"))
        let userId = user.user.id;
        axios.get(`/api/display-order/${userId}`)
            .then((res) => {
               
                setOrder(res.data.orderData)
            })
    }
    useEffect(() => {
        orderCheck()
    }, [])
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


                                    <div>
                                        <div className='user-border'>
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th>No</th>
                                                        <th>Order Amount</th>
                                                        <th>Payment Method</th>
                                                        <th>order_Date</th>

                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        order.length > 0 ?
                                                            order.map((v, i) => {
                                                                return (
                                                                    <tr key={i}>
                                                                        <td>{i + 1}</td>
                                                                        <td>${v.orderAmount}</td>
                                                                        <td>{v.order_type}</td>
                                                                        <td>{v.order_date}</td>

                                                                    </tr>
                                                                )
                                                            })


                                                            : "No order"
                                                    }

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

