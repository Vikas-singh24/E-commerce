import React, { useState } from 'react'
import "./CSS/CustomerList.css"
const CustomerList = () => {
  const [customers, setCustomers] = useState([])
  return (
    <div className='customerList'>
      <h1>Customer List</h1>
      <div className='SearchBar'>
        <input type="text" placeholder='Search Employee' />
        <button>Search</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Customer ID</th>
            <th>Customer Name</th>
            <th>Email Id</th>
            <th>Phone Number</th>
            
          </tr>
        </thead>
        <tbody>
          {/* {customers.map((c,i)=(
            <tr key={c._id}>
              <td>{i+1}</td>
              <td>{c.name}</td>
              <td>{c.email}</td>
              <td>{c.moblie}</td>

            </tr>
          ))
          } */}
          <tr>
            <td>1</td>
            <td>Ajay</td>
            <td>Ajay@gmail.com</td>
            <td>8976543210</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Ajay</td>
            <td>Ajay@gmail.com</td>
            <td>8976543210</td>
          </tr>
        </tbody>

      </table>
    </div>
  )
}

export default CustomerList

