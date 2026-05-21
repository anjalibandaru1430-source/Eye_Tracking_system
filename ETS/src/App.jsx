import React from 'react'
import Login from './Login/Login'
import Reg from './Login/Reg'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <div className='bg-light min-vh-100 d-flex justify-content-center align-items-center'>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Reg />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App