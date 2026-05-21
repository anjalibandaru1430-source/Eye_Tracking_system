import React from 'react'
import { useState } from 'react'   

const Login = () => {
      const [showPassword, setShowPassword] = useState(false)

  return <div className='card mx-auto mt-5 shadow-lg border-0 rounded-4 p-4 ' style={{width:'30rem'}}>
    <div className='card-header bg-white text-dark text-center border-0 '>
    <h1 className='card-title fw-bold'>Sign in</h1>
    <p>Enter your mobile number and password to get started</p>
    </div>
    <div className='card-body '>
    <form className='form'>
        <div className='mb-3 text-start'>
        <label classsName='form-label '>Mobile  </label><br/>
        <div className='input-group'>
            <span className='input-group-text'>+91</span>
    
        <input type = "text" placeholder='please enter mobile number' className='form-control'/>
        </div>
        </div>
        <div className='mb-3 text-start'>
            <label className='form-label'>Password</label>

            <div className='input-group'>
                <span className='input-group-text'><i className='bi bi-lock'></i></span>
              <input
                type={showPassword ? 'text' : 'password'}
                className='form-control'
                placeholder='Enter your Password'
              />

              <span
                className='input-group-text'
                style={{ cursor: 'pointer' }}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword 
                ?<i className='bi bi-eye-slash'></i> 
                : <i className='bi bi-eye'></i>}
              </span>
            </div>

        <br/>
        <div className='mb-3 text-end '>
        <a href='#forgot-password' className='text-end mt-1 text-decoration-none text-dark'>Forgot Password?</a>
        </div>
        </div>
        <div className='mb-3 form-check text-start'>
            <input type ='checkbox' className='form-check-input '/>
            <label className='form-check-label'>
                I have read and accept the Terms & Conditions , Privacy Policy,and EULA agreement.
            </label>
        </div>
        <div className='mb-4  text-center '>
            <button type='submit' className='btn btn-primary w-100 bg-white text-dark '>Continue</button>
        </div>
        <div >
            <a href='#' className='text-decoration-none text-dark'>Need help?</a>
        </div>
    </form>
    </div>
  </div>
}

export default Login