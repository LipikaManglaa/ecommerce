import logo from './logo.svg';
import './App.css';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import {RouterProvider, createBrowserRouter }from 'react-router-dom'
import Home from './pages/Home';
import SignUp from './pages/auth/SignUp';
import Login from './pages/auth/Login';
import AdminLogin from './pages/admin/AdminLogin';
import Gallery from './pages/Gallery';

import AdminDashboard from './pages/admin/AdminDashboard';
import AddProduct from './pages/admin/AddProduct';
import ViewProduct from './pages/admin/ViewProduct';
import AddCategory from './pages/admin/AddCategory';
import ViewCategory from './pages/admin/ViewCategory';
import ViewUser from './pages/admin/ViewUser';
import AddCoupon from './pages/admin/AddCoupon';
import ViewCoupon from './pages/admin/ViewCoupon';
import AddSubCategory from './pages/admin/AddSubCategory';
import ViewSubCategory from './pages/admin/ViewSubCategory';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CategoryFiler from './pages/CategoryFiler';
import UserDashboard from './pages/user/UserDashboard';
import UserProfile from './pages/user/UserProfile';
import ProductDetails from './pages/ProductDetails';
import Profile from './pages/admin/Profile';

let route=createBrowserRouter([
  
  {
    path:'/',
    element:<Home/>
  },
 
  {
    path:'/Cart',
    element:<Cart/>
  },
  {
    path:'/Category-Filter/:slug',
    element:<CategoryFiler/>
  },
  {
    path:'/user-dashboard',
    element:<UserDashboard/>
  },
   {
    path:'/user-profile',
    element:<UserProfile/>
  },
  {
    path:'/Checkout',
    element:<Checkout/>
  },
  {
    path:'/category/:slug',
    element:<CategoryFiler/>
  },
  {
    path:'/product-details/:slug',
    element:<ProductDetails/>
  },
 
  {
    path:'/signUp',
    element:<SignUp/>
  },
  {
    path:'/login',
    element:<Login/>
  },


  {
    path:'/admin-login',
    element:<AdminLogin/>
  },
  {
    path:'/galleryImages',
    element:<Gallery/>
  },
  {
    path:'/admin-dashboard',
    element:<AdminDashboard/>
  },
  {
    path:'/admin/addProduct',
    element:<AddProduct/>
  },
  {
    path:'/admin/viewProduct',
    element:<ViewProduct/>
  },
  {
    path:'/admin/addCategory',
    element:<AddCategory/>
  },
  {
    path:'/admin/viewCategory',
    element:<ViewCategory/>
  },
  {
    path:'/admin/ViewUser',
    element:<ViewUser/>
  },
  {
    path:'/admin/addCoupon',
    element:<AddCoupon/>
  },
  {
    path:'/admin/viewCoupon',
    element:<ViewCoupon/>
  },
  {
    path:'/admin/addSubCategory',
    element:<AddSubCategory/>
  },
  {
    path:'/admin/changepassword',
    element:<Profile/>
  },
  {
    path:'/admin/viewSubCategory',
    element:<ViewSubCategory/>
  },
  
])
function App() {
  return (
    <>
       <RouterProvider router={route}/>
       <ToastContainer/>
   
    </>
 
  );
}

export default App;
