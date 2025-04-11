import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router";
  
  import React from "react";
  import ReactDOM from "react-dom/client";
import HomeLayout from "../layouts/HomeLayout";
import Campaign from "../pages/Campaign";
  
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
      path:'/auth/login',
      element:<h1>login</h1>
    },
    {
      path:'/auth/register',
      element:<h1>Register</h1>
    }
  ]);