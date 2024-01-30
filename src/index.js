import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import LandingPage from "./Pages/LandingPage/LandingPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Members from "./Pages/Members/Members";
import Contact from "./Pages/Contact/Contact";
import MembersAdmin from "./Pages/Admin/Members/Members";
import Login from "./Pages/Admin/Login/Login";
import Dashboard from "./Pages/Admin/Dashboard/Dashboard";
import PublicationsAdmin from "./Pages/Admin/Publications/Publications";
import { Publications } from "./Pages/Publications/Publications";
import Research from "./Pages/Research/Research";
import Collaborate from "./Pages/Collaborate/Collaborate";
import Projects from "./Pages/Projects/Projects";
import Admins from "./Pages/Admin/Admins/Admins";
import LatestNewsAdmin from "./Pages/Admin/LatestNews/LatestNews";
import InternalResources from "./Pages/InternalResources/InternalResources";
import ExternalResources from "./Pages/ExternalResources/ExternalResources";
import Blogs from "./Pages/Blogs/Blogs";
import BlogsAdmin from "./Pages/Admin/Blogs/Blogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage></LandingPage>,
  },
  {
    path: "/members",
    element: <Members></Members>,
  },
  {
    path: "/publications",
    element: <Publications></Publications>,
  },
  {
    path: "/contact",
    element: <Contact></Contact>,
  },
  {
    path: "/research",
    element: <Research></Research>,
  },
  {
    path: "/projects",
    element: <Projects></Projects>,
  },
  {
    path: "/collaborate",
    element: <Collaborate></Collaborate>,
  },
  {
    path: "/admin/login",
    element: <Login></Login>,
  },
  {
    path: "/admin/dashboard",
    element: <Dashboard></Dashboard>,
  },
  {
    path: "/admin/members",
    element: <MembersAdmin></MembersAdmin>,
  },
  {
    path: "/admin/publications",
    element: <PublicationsAdmin></PublicationsAdmin>,
  },
  {
    path: "/admin/admins",
    element: <Admins></Admins>,
  },
  {
    path: "/admin/latestNews",
    element: <LatestNewsAdmin></LatestNewsAdmin>,
  },
  {
    path : "/admin/blogs",
    element: <BlogsAdmin></BlogsAdmin>
  },
  {
    path:"/internal-resources",
    element: <InternalResources></InternalResources>
  },
  {
    path:"/external-resources",
    element: <ExternalResources></ExternalResources>
  },
  {
    path:"/blogs",
    element: <Blogs></Blogs>
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
