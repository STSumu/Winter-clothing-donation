import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router";
  
  import React from "react";
  import ReactDOM from "react-dom/client";
import HomeLayout from "../layouts/HomeLayout";
import Campaign from "../pages/Campaign";
import Login from "../pages/Login";
import AuthLayout from "../layouts/AuthLayout";
import Register from "../pages/Register";
import Error from "../pages/Error";
import Home from "../pages/Home";
  
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout></HomeLayout>,
      errorElement:<Error></Error>,
      
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/campaign',
          element:<Campaign></Campaign>,
        },
        {
          path:'/help',
          element:<h1>How to Help</h1>
        },
        {
          path:'/dashboard',
          element:<h1>Dashboard</h1>
        }
      ]
    },
    {
      path:'/auth',
      element:<AuthLayout></AuthLayout>,
      children:[
        {
          path:'/auth/login',
          element:<Login></Login>,
        },
        {
          path:'/auth/register',
          element:<Register></Register>
        }
      ]
    },
    
  ]);