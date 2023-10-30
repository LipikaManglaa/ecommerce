import React from 'react'
import Sidebar from './common/Sidebar'

export default function AddSubCategory() {
  return (
    <>
    
    <Sidebar/>
    <div className="">
        <h2 className="text-center text-blue-400 font-bold text-2xl uppercase mb-10">Add Sub Category</h2>
        <div className="bg-white p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
          <form >
            <div className="mb-5">
              <label htmlFor="name" className="block mb-2 font-bold text-gray-600" >Category Name</label>
              <input type="text" name="name"className="border border-gray-300 shadow p-3 w-full rounded mb-"  />
            </div>
            <div className="mb-5">
              <label htmlFor="name" className="block mb-2 font-bold text-gray-600" >Category Description</label>
              <textarea name='description'  rows={4} className="border border-gray-300 shadow p-3 w-full rounded mb-" ></textarea>
            
            </div>
            <div className="mb-5">
              <label htmlFor="name" className="block mb-2 font-bold text-gray-600" >SubCategory Name</label>
              <input type="text" name="subcategoryname" className="border border-gray-300 shadow p-3 w-full rounded mb-"  />
            </div>
            <div className="mb-5">
              <label htmlFor="name" className="block mb-2 font-bold text-gray-600" >Image</label>
              <input type='file' name='image' />
              
            
            </div>
           
            <button type='submit' className="block w-full bg-blue-500 text-white font-bold p-4 rounded-lg">Submit</button>
          </form>
        </div>
      </div>
    </>
  )
}