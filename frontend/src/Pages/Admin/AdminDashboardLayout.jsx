import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Dashboard from './Dashboard'
import AddProducts from './AddProducts'
import ProductsList from './ProductsList'
import Orders from './Orders'
import CustomerList from './CustomerList'
import './CSS/AdminDashboardLayout.css'
const AdminDashboardLayout = () => {
 const [activePage, setActivePage] = useState("dashboard")
  return (
    <div className='DashboardLayout'>
        {/* Left SideBar  */}
        <div className='SideBar'>
            <ul>
                <li> <button onClick={()=>setActivePage("dashboard")}> DashBoard</button></li>
                <li> <button onClick={()=>setActivePage("addproducts")}> Add Products</button></li>
                <li> <button onClick={()=>setActivePage("productslist")}> Products List</button></li>
                <li> <button onClick={()=>setActivePage("orders")}> Orders</button></li>
                <li> <button onClick={()=>setActivePage("customerlist")}> Customer List</button></li>
            </ul>
        </div>
        {/* Right Side  */}
        <div className='RightSide'>
        {activePage==="dashboard" && <Dashboard/>}
        {activePage==="addproducts" && <AddProducts/>}
        {activePage==="productslist" && <ProductsList/>}
        {activePage==="orders" && <Orders/>}
        {activePage==="customerlist" && <CustomerList/>}
        </div>

      
    </div>
  )
}

export default AdminDashboardLayout
