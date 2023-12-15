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
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);


