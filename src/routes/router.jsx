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
  
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout></HomeLayout>,
      children:[
        {
          path:'/',
          element:<h1>Home</h1>
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
          element:<h1>Register</h1>
        }
      ]
    },
    
  ]);