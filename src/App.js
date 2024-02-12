import "./App.css";

import { Route, Routes } from "react-router-dom";

import Admins from "./Pages/Admin/Admins/Admins";
import Blogs from "./Pages/Blogs/Blogs";
import BlogsAdmin from "./Pages/Admin/Blogs/Blogs";
import Collaborate from "./Pages/Collaborate/Collaborate";
import Contact from "./Pages/Contact/Contact";
import Dashboard from "./Pages/Admin/Dashboard/Dashboard";
import ExternalResources from "./Pages/ExternalResources/ExternalResources";
import InternalResources from "./Pages/InternalResources/InternalResources";
import LandingPage from "./Pages/LandingPage/LandingPage";
import LatestNewsAdmin from "./Pages/Admin/LatestNews/LatestNews";
import Login from "./Pages/Admin/Login/Login";
import Members from "./Pages/Members/Members";
import MembersAdmin from "./Pages/Admin/Members/Members";
import Projects from "./Pages/Projects/Projects";
import { Publications } from "./Pages/Publications/Publications";
import PublicationsAdmin from "./Pages/Admin/Publications/Publications";
import React from "react";
import Research from "./Pages/Research/Research";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/members" element={<Members />} />
      <Route path="/research" element={<Research />} />
      <Route path="/publications" element={<Publications />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/internal-resources" element={<InternalResources />} />
      <Route path="/external-resources" element={<ExternalResources />} />
      <Route path="/collaborate" element={<Collaborate />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/admin">
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="members" element={<MembersAdmin />} />
        <Route path="publications" element={<PublicationsAdmin />} />
        <Route path="admins" element={<Admins />} />
        <Route path="latest-news" element={<LatestNewsAdmin />} />
        <Route path="blogs" element={<BlogsAdmin />} />
      </Route>
    </Routes>
  );
};

export default App;
