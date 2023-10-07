import React, { useState } from 'react'
import {Link} from 'react-router-dom'

const Login = () => {
  const [formData,setFormData] =useState({
    email:'',
    password:'',
  });

  const handleInputChange = e => {
    setFormData({ ... formData, [e.target.name]: e.target.value})
  }
  return (
    <form>
  {/* <!-- Email input --> */}
  <div class="form-outline mb-4">
    <input type="email" placeholder='Enter your email' name='email' value={formData.email} onChange={handleInputChange} required />
  </div>

  {/* <!-- Password input --> */}
  <div class="form-outline mb-4">
    <input type="password" placeholder='Enter your password' name='password' value={formData.password} onChange={handleInputChange} required />
  </div>

  {/* <!-- Submit button --> */}
  <button type="button" class="btn btn-primary btn-block mb-4">Sign in</button>

  {/* <!-- Register buttons --> */}
  <div class="text-center">
    <p>Not a member? <Link to ='/register'>Register</Link></p>
  </div>
</form>
  )
}

export default Login
