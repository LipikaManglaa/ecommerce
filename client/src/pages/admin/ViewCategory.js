import React, { useEffect, useState } from 'react'

import Sidebar from './common/Sidebar'
import axios from 'axios';
import { toast } from 'react-toastify'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
export default function ViewCategory() {
  const [categories, setCategories] = useState([]);

  //getall products
  const getAllCategories = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/get-admin-category");

      setCategories(data.categories);

    } catch (error) {
      console.log(error);
      toast.error("Someething Went Wrong");
    }
  };


  //Delete

  let handleDelete = async (pid) => {
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


  return (
    <>
      <Sidebar />
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
                  Image
                </th>


                <th scope="col" className="px-6 py-3 text-left tracking-wider">
                  Delete
                </th>

              </tr>
            </thead>
            <tbody className="bg-gray-800">
              {
                categories.length > 0 ?
                  categories.map((p, i) => {

                    return (
                      <tr key={i}>
                        <td className="pl-4">
                          {i + 1}
                        </td>
                        <td className=" px-6 py-4 whitespace-nowrap" >

                          {p.name}
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap ">
                          {p.description}
                        </td>
                        <td className=" px-6 py-4 whitespace-nowrap" >

                          <img src={`http://localhost:5000/` + p.image} />
                        </td>


                        <td className=" px-6 py-4 whitespace-nowrap" onClick={() => { handleDelete(p._id); }}>
                          <FontAwesomeIcon icon={faTrash} />
                        </td>
                      </tr>
                    )
                  })

                  : ""
              }



            </tbody>
          </table>

        </div>
      </div>


    </>
  )
}


