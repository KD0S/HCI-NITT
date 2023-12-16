import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LandingPage from './Pages/LandingPage/LandingPage';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Members from './Pages/Members/Members';
import Contact from './Pages/Contact/Contact';
import MembersAdmin from './Pages/Admin/Members/Members';
import Login from './Pages/Admin/Login/Login';
import Dashboard from './Pages/Admin/Dashboard/Dashboard';



const router = createBrowserRouter([
  {
     path: "/",
     element: <LandingPage></LandingPage>
  },
  {
     path: "/members",
     element: <Members></Members>
  },

  {
    path: "/contact",
    element: <Contact></Contact>
  },

  {
    path: "/admin/login",
    element: <Login></Login>
  },

  {
    path: "/admin/login",
    element: <Login></Login>
  },

  {
    path: "/admin/dashboard",
    element: <Dashboard></Dashboard>
  },
  
  {
    path: "/admin/members",
    element: <MembersAdmin></MembersAdmin>
  }

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);


