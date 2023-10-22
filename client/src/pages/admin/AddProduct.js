import React from 'react'
import AdminDashboard from './AdminDashboard'
import Sidebar from './common/Sidebar'
import { useState } from 'react'
import axios from 'axios'

  
export default function AddProduct() {
    const [image, setImage] = useState(null);


  const submitImage = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", image);

    const result = await axios.post(
      "http://localhost:5000/upload-image",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
  };
  const onInputChange = (e) => {
    console.log(e.target.files[0]);
    setImage(e.target.files[0]);
    
  };

  return (
    <>
    <Sidebar/>
    <div className="">
        <h2 className="text-center text-blue-400 font-bold text-2xl uppercase mb-10">Fill out our form</h2>
        <div className="bg-white p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
          <form onSubmit={submitImage}>
            <div className="mb-5">
              <label htmlFor="name" className="block mb-2 font-bold text-gray-600">Name</label>
              <input type="file" accept="image/*" onChange={onInputChange} className="border border-gray-300 shadow p-3 w-full rounded mb-" />
            </div>
           
            <button type='submit' className="block w-full bg-blue-500 text-white font-bold p-4 rounded-lg">Submit</button>
          </form>
        </div>
      </div>
    </>
  )
}
