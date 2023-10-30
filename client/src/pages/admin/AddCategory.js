

import React from 'react'
import AdminDashboard from './AdminDashboard'
import Sidebar from './common/Sidebar'
import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
  
export default function AddCategory() {
    const [name, setName] = useState("");
    const [description, setDescription]=useState("");
    const [image, setImage]=useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        console.log(formData)
        formData.append('name', name); 
        formData.append('description', description); 
      
        formData.append("image", image);
        try {
          const { data } = await axios.post("http://localhost:5000/api/create-category", 
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        
          );
          if (data?.success) {
            toast.success(`${name} is created`);
            
          } else {
            toast.error(data.message);
          }
        } catch (error) {
          console.log(error);
         toast.error("somthing went wrong in input form");
        }
      };
    
      const onInputChange = (e) => {
        console.log(e.target.files[0]);
        setImage(e.target.files[0]);
        
        
      };
    
  return (
    <>
    <Sidebar/>
    <div className="">
        <h2 className="text-center text-blue-400 font-bold text-2xl uppercase mb-10">Add Category</h2>
        <div className="bg-white p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
          <form onSubmit={handleSubmit}>
          <div className="mb-5">
              <label htmlFor="name" className="block mb-2 font-bold text-gray-600">Image</label>
              <input type="file" accept="image/*" onChange={onInputChange} className="border border-gray-300 shadow p-3 w-full rounded mb-" />
            </div>
            <div className="mb-5">
              <label htmlFor="name" className="block mb-2 font-bold text-gray-600" >Category Name</label>
              <input type="text" name="name" onChange={(e) => setName(e.target.value)} value={name} className="border border-gray-300 shadow p-3 w-full rounded mb-"  />
            </div>
            <div className="mb-5">
              <label htmlFor="name" className="block mb-2 font-bold text-gray-600" >Category Description</label>
              <textarea name='description' value={description} onChange={(e) => setDescription(e.target.value)} rows={4} className="border border-gray-300 shadow p-3 w-full rounded mb-" ></textarea>
            
            </div>
          
           
            <button type='submit' className="block w-full bg-blue-500 text-white font-bold p-4 rounded-lg">Submit</button>
          </form>
        </div>
      </div>
    </>
  )
}

