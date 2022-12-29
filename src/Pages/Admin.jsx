import React from "react"
import AdminDrawer from "../Components/Admin/AdminDrawer"
import { Outlet } from "react-router-dom"
function Admin() {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen py-10 ">
      <div className="flex justify-start flex-col md:flex-row px-4">
        <AdminDrawer />
        <section className="container m-auto">
          <Outlet />
        </section>
      </div>
    </div>
  )
}

export default Admin
