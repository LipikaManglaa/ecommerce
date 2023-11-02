import logo from './logo.svg';
import './App.css';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import {RouterProvider, createBrowserRouter }from 'react-router-dom'
import Home from './pages/Home';
import SignUp from './pages/auth/SignUp';
import Login from './pages/auth/Login';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CategoryFiler from './pages/CategoryFiler';
import UserDashboard from './pages/user/UserDashboard';
import UserProfile from './pages/user/UserProfile';
import ProductDetails from './pages/ProductDetails';


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
