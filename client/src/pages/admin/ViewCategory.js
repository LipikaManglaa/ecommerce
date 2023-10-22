

import React, { useEffect, useState } from 'react'
import AdminDashboard from './AdminDashboard'
import Sidebar from './common/Sidebar'
import axios from 'axios';
import { toast } from 'react-toastify'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
export default function ViewCategory() {
  const [categories, setCategories] = useState([]);
  const [updatedName, setUpdatedName] = useState("");
  const [updatedDescription, setUpdatedDescription] = useState("");
  const [visible, setVisible] = useState(false);

  let [inputData, updateInputData] = useState([]);

  let [data, updateData] = useState(
    {
        
        name: "",
        description: "",
       
    }
)
  //getall products
  const getAllCategories = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/get-category");
      console.log(data)
    setCategories(data.category);
    
    } catch (error) {
      console.log(error);
      toast.error("Someething Went Wrong");
    }
  };


  //Delete

  let handleDelete=async(pid)=>{
    try {
        const { data } = await axios.delete(
          `http://localhost:5000/api/delete-category/${pid}`
        );
        if (data.success) {
          toast.success(`category is deleted`);
  
          getAllCategories();
        } else {
          toast.error(data.message);
        }
      } catch (error) {
        toast.error("Somtihing went wrong");
      }
    };
    

  //lifecycle method
  useEffect(() => {
    getAllCategories();
  }, []);

let modalOpen=()=>{

    setVisible(!visible)
}


//update

const handleSubmit = async (e) => {
    e.preventDefault();
   console.log(e.target.name)
  };


  let handleUpdate = (e) => {
    let upData = { ...data, [e.target.name]: e.target.value }
    updateData(upData)
}
return (
<>
 <Sidebar/>
 <div className="">
      <h2 className="text-center text-blue-400 font-bold text-2xl uppercase mb-10">View Product</h2>
      <div className="bg-white p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
      <table className=" text-sm text-gray-400">
              <thead className="bg-gray-800 text-xs uppercase font-medium">
                <tr>
                  
                  <th scope="col" className="px-6 py-3 text-left tracking-wider">
                    Sr. No
                  </th>
                  <th scope="col" className="px-6 py-3 text-left tracking-wider">
                 Category Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-left tracking-wider">
                   Category Description
                  </th>
               
                  <th scope="col" className="px-6 py-3 text-left tracking-wider">
                    Edit
                  </th>
                  <th scope="col" className="px-6 py-3 text-left tracking-wider">
                    Delete
                  </th>
               
                </tr>
              </thead>
              <tbody className="bg-gray-800">
             {
               categories?.map((p,i) => (
                <tr>
                <td className="pl-4">
                 {i+1}
                </td>
                <td className=" px-6 py-4 whitespace-nowrap" >
                 
                {p.name}
                </td>
                
                <td className="px-6 py-4 whitespace-nowrap "  onClick={() => { handleUpdate(p._id); }}>
                 {p.description}
                </td>
                
                <td className=" px-6 py-4 whitespace-nowrap"  onClick={modalOpen}>
                            
                <FontAwesomeIcon icon={faEdit}/>
                </td>
              
                <td className=" px-6 py-4 whitespace-nowrap"  onClick={() => { handleDelete(p._id); }}>
                <FontAwesomeIcon icon={faTrash}/>
                </td>
              </tr>
                ))
             }
             
            
            
              </tbody>
            </table>

            {visible ? 
<div className='w-[500px] h-[400px] absolute top-[50px] right-[0] shadow-lg shadow-cyan-500/50 p-[20px]'   >
<form onSubmit={handleSubmit}>
            <div className="mb-5">
              <label htmlFor="name" className="block mb-2 font-bold text-gray-600" >Category Name</label>
              <input type="text" name="name" onChange={handleUpdate} value={data.name} className="border border-gray-300 shadow p-3 w-full rounded mb-"  />
            </div>
            <div className="mb-5">
              <label htmlFor="name" className="block mb-2 font-bold text-gray-600" >Category Description</label>
              <textarea name='description' onChange={handleUpdate} value={data.description} rows={4} className="border border-gray-300 shadow p-3 w-full rounded mb-" ></textarea>
            
            </div>
           
            <button type='submit' className="block w-full bg-blue-500 text-white font-bold p-4 rounded-lg">Update</button>
          </form>

</div>
:
""
            }
      </div>
    </div>
    

  </>
  )
            }


