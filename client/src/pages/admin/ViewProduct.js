
import React, { useEffect, useState } from 'react'
import AdminDashboard from './AdminDashboard'
import Sidebar from './common/Sidebar'
import axios from 'axios';
import { toast } from 'react-toastify'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
export default function ViewProduct() {
  const [products, setProducts] = useState([]);
  const [imageData, setImagePath] = useState('');

  //getall products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/get-all-products");

      console.log(data.product[0].image)
      setProducts(data.product);


    } catch (error) {
      console.log(error);
      toast.error("Someething Went Wrong");
    }
  };


  let handleDelete = async (pid) => {

    try {
      const { data } = await axios.delete(
        `http://localhost:5000/api/delete-product/${pid}`
      );

      if (data.success) {
        toast.success(`prooduct is deleted`);

        getAllProducts()
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Somtihing went wrong");
    }
  };


  useEffect(() => {
    getAllProducts();
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
                  Product Name
                </th>
                <th scope="col" className="px-6 py-3 text-left tracking-wider">
                  Product Image
                </th>
                <th scope="col" className="px-6 py-3 text-left tracking-wider">
                  Product Description
                </th>
                <th scope="col" className="px-6 py-3 text-left tracking-wider">
                  Product price
                </th>
                <th scope="col" className="px-6 py-3 text-left tracking-wider">
                  Category Name
                </th>
                <th scope="col" className="px-6 py-3 text-left tracking-wider">
                  Sub Category Name
                </th>
                <th scope="col" className="px-6 py-3 text-left tracking-wider">
                  Delete
                </th>

              </tr>
            </thead>
            <tbody className="bg-gray-800">
              {
                products?.map((p, i) => (
                  <tr key={i}>
                    <td className="pl-4">
                      {i + 1}
                    </td>
                    <td className=" px-6 py-4 whitespace-nowrap">

                      {p.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <img src={`http://localhost:5000/` + p.image} />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {p.description}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {p.price}
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                      +1.107
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {p.subCategoryId}
                    </td>
                    <td className=" px-6 py-4 whitespace-nowrap" onClick={() => { handleDelete(p._id); }}>
                      <FontAwesomeIcon icon={faTrash} />
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

