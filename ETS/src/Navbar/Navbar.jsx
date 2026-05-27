import React from 'react'
import{ Link } from 'react-router-dom'



const Navbar = () => {
  return (
    <nav className='bg-dark text-white p-3  rounded text-left'>
        <div className=' d-flexcontainer '>
          <h1>Dashboard</h1>
            <ul className='list-group'>
              <div className=" navbar-nav nav-item mb-2 ">
              <Link to="/dashboard" className="nav-link">Dashboard</Link>
              <Link to="/products" className="nav-link">Products</Link>
              <Link to="/organizations" className="nav-link">Organizations</Link>
              <Link to="/licenses" className="nav-link">Licenses</Link>
              <Link to="/Machines" className="nav-link">Machines</Link>
              <Link to="/users" className="nav-link">Users</Link>
              <Link to="/Roles" className="nav-link">Roles</Link>
              <Link to="/Approval" className="nav-link">Approval</Link>
              </div>
            </ul>
            </div>
          </nav>
  )
}

export default Navbar