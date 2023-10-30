import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AdminDashboard from './AdminDashboard'
import Sidebar from './common/Sidebar'

export default function ViewUser() {
let [user,setUSer]=useState([{}])
  function viewUSer(){
    axios.get(`http://localhost:5000/api/display-user`)
    .then((res)=>{
      setUSer(res.data.users)
    })
  }
  console.log(user.users)
  useEffect(()=>{
    viewUSer()
  },[])
  return (
    <>
 



<Sidebar/>
   <div className="">
        <h2 className="text-center text-blue-400 font-bold text-2xl uppercase mb-10">View User</h2>
        <div className="bg-white p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
        <table className=" text-sm text-gray-400">
                <thead className="bg-gray-800 text-xs uppercase font-medium">
                  <tr>
                    
                    <th scope="col" className="px-6 py-3 text-left tracking-wider">
                      Sr. No
                    </th>
                    <th scope="col" className="px-6 py-3 text-left tracking-wider">
                    User Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-left tracking-wider">
                     Email
                    </th>
                    <th scope="col" className="px-6 py-3 text-left tracking-wider">
                     Phone
                    </th>
                    
                  
                 
                  </tr>
                </thead>
                <tbody className="bg-gray-800">
               {
                 user?.map((p,i) => (
                  <tr key={i}>
                  <td className="pl-4">
                   {i+1}
                  </td>
                  <td className=" px-6 py-4 whitespace-nowrap">
                   
                  {p.name}
                  </td>
                
                
                  <td className="px-6 py-4 whitespace-nowrap">
                   {p.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                   {p.phone}
                  </td>
                 
                </tr>
                  ))
               }
               
              
              
                </tbody>
              </table>
        </div>
      </div>
      

    </>
    )
    }