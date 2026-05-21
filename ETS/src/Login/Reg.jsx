import React from 'react'
import { Link } from 'react-router-dom'

const Reg = () => {
  return (
    <div  className='card mx-auto mt-5 shadow-lg border-0 rounded-4 p-4 ' style={{width:'30rem'}}>
        <div className='card-header bg-white bordder-0 '>
            <h1>Sign up</h1>
            <p>Create your account for free</p>
        <form className='bg-light'>
            <div className='mb-3 text-start'>
                <label className='form-label'>Name</label>
                <input type='text' placeholder='Enter your name' className='form-control'/>
            </div>
            <div className='mb-3 text-start'>
                <label className='form-label'>Email</label>
                <input type='email' placeholder='Enter your email' className='form-control'/>
            </div>
            <div className='mb-3 text-start'>
                <label className='form-label'>Password</label>
                <input type='password' placeholder='Enter your password' className='form-control'/>
            </div>
            <div className='mb-3'>
                <button type ='submit' className='btn btn-primary w-100 bg-dark text-white'>Sign up</button>
                <p>By continuing, you agree to our Terms of Use and Privacy Policy</p>
            </div>
        </form>
        <div>
            <p>Already have an account? <Link to='/Login' className='text-decoration-none'>Sign in</Link></p>
        </div>
    </div>
    </div>

  )
}

export default Reg