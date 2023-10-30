import React from 'react'
import AdminDashboard from './AdminDashboard'
import Sidebar from './common/Sidebar'
import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

  
export default function AddProduct() {
    const [image, setImage] = useState(null);
    const [name, setName] = useState("");
    const [description, setDescription]=useState("");
    const [price, setPrice]=useState("");
    const [categroyId, setCategoryId]=useState("");
    const [productId, setProductId] = useState("");

  const submitImage = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", image);
    try {
      const result = await axios.post(
          "http://localhost:5000/api/upload-image",
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );
      if (result?.success) {
        toast.success(`upload is created`);
        
      } else {
        toast.error(result.message);
      }
    }catch(err){
      console.log(err)
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
        <h2 className="text-center text-blue-400 font-bold text-2xl uppercase mb-10">Fill out our form</h2>
        <div className="bg-white p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
          <form onSubmit={submitImage}>
            <div className="mb-5">
              <label htmlFor="name" className="block mb-2 font-bold text-gray-600">Image</label>
              <input type="file" accept="image/*" onChange={onInputChange} className="border border-gray-300 shadow p-3 w-full rounded mb-" />
            </div>
            
            <div className="mb-5">
              <label  className="block mb-2 font-bold text-gray-600">Name</label>
              <input type="text"  onChange={(e) => setName(e.target.value)} value={name}  className="border border-gray-300 shadow p-3 w-full rounded mb-" />
            </div>
            
            <div className="mb-5">
              <label  className="block mb-2 font-bold text-gray-600">Description</label>
              <textarea   value={description} onChange={(e) => setDescription(e.target.value)} className="border border-gray-300 shadow p-3 w-full rounded mb-" ></textarea>
            </div>
            <div className="mb-5">
              <label  className="block mb-2 font-bold text-gray-600">Price</label>
              <input type="number"   value={description} onChange={(e) => setPrice(e.target.value)}  className="border border-gray-300 shadow p-3 w-full rounded mb-" />
            </div>
            <div className="mb-5">
              <label  className="block mb-2 font-bold text-gray-600">SubCategory Id</label>
              <input type="text"    className="border border-gray-300 shadow p-3 w-full rounded mb-" />
            </div>

            <button type='submit' className="block w-full bg-blue-500 text-white font-bold p-4 rounded-lg">Submit</button>
          </form>
        </div>
      </div>
    </>
  )
}
