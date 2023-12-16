import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './Login/Login'
import MembersAdmin from './Members/Members'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login></Login>
    },
    {
        path: "/admin/members",
        element: <MembersAdmin></MembersAdmin>
    }

])


const Admin = () => {
    return (
        <RouterProvider router={router}></RouterProvider>
    )
}

export default Admin