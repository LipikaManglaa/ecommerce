import React from 'react'
import Sidebar from './common/Sidebar'

export default function Profile() {


  return (
   <>
   

   <Sidebar/>
    <div className="">
        <h2 className="text-center text-blue-400 font-bold text-2xl uppercase mb-10">Change Password</h2>
        <div className="bg-white p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
          <form >
            <div className="mb-5">
              <label className="block mb-2 font-bold text-gray-600" >Old Password</label>
              <input type="text" name="oldpassword"className="border border-gray-300 shadow p-3 w-full rounded mb-"  />
            </div>
            <div className="mb-5">
              <label  className="block mb-2 font-bold text-gray-600" >New Password</label>
              <input type="text" name="newpassword"className="border border-gray-300 shadow p-3 w-full rounded mb-"  />
            
            </div>
            <div className="mb-5">
              <label  className="block mb-2 font-bold text-gray-600" >Confirm Password</label>
              <input type="text" name="confirmpassword"className="border border-gray-300 shadow p-3 w-full rounded mb-"  />
            
            </div>
           
            <button type='submit' className="block w-full bg-blue-500 text-white font-bold p-4 rounded-lg">Submit</button>
          </form>
        </div>
      </div>
    </>
  )
}