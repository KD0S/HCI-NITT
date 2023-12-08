import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LandingPage from './Pages/LandingPage/LandingPage';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Members from './Pages/Members/Members';


const router = createBrowserRouter([
  {
     path: "/",
     element: <LandingPage></LandingPage>
  },
  {
     path: "/members",
     element: <Members></Members>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);


