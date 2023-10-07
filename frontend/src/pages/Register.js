// import { useState } from 'react'
import {useState} from 'react'
import signup from '../assets/images/signup.gif'

const Register = () => {

  const [formData,setFormData] =useState({
    name:'',
    email:'',
    password:'',
    gender:'',
    role:''
  });

  const handleInputChange = e => {
    setFormData({ ... formData, [e.target.name]: e.target.value})
  }

  const submithandler = async event => {
    event.preventDefault()
  }

  return (
    <section class="vh-100 gradient-custom">
  <div class="container py-5 h-100">
    <div class="row justify-content-center align-items-center h-100">
      <div class="col-12 col-lg-9 col-xl-7">
        <div class="card shadow-2-strong card-registration border-radius: 15px;">
          <div class="card-body p-4 p-md-5">
            <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">Create an Account</h3>
            {/* <img src={signup} alt='' /> */}
            <form onSubmit={submithandler}>

              <div class="row">
                <div class="col-md-6 mb-4">

                  <div class="form-outline">
                    <input type="text"  className='form-control form-control-lg'placeholder='Enter your Full name' name='name' 
                    value={formData.name}
                    onChange={handleInputChange}
                    required/>
                  </div>

                </div>
                <div class="col-md-6 mb-4">
                  <div class="form-outline">
                  <input type="email"  className='form-control form-control-lg'placeholder='Enter your Email' name='email' 
                  value={formData.email}
                  onChange={handleInputChange}
                  required/>
                  </div>
                </div>
                <div class="col-md-6 mb-4">
                  <div class="form-outline">
                  <input type="password"  className='form-control form-control-lg'placeholder='Enter your Password' name='password' 
                  value={formData.password}
                  onChange={handleInputChange}
                  required/>
                  </div>
                </div>
              </div>
              {/* <div className='row'> */}
                <label htmlFor='' className=''>Are you a:
                <select name='role'
                value={formData.role}
                onChange={handleInputChange}
                className=''>
                  <option value='patient'>Patient</option>                  
                  <option value='doctor'>Doctor</option>                  
                  </select></label>
                  
                  <label htmlFor='' className=''>Gender
                <select name='gender' 
                  value={formData.gender}
                  onChange={handleInputChange}
                className=''>
                  <option value=''>select</option>                  
                  <option value='male'>Male</option>                  
                  <option value='female'>Female</option>                  
                  <option value='other'>Other</option>                  
                  </select></label>
              {/* </div> */}
{/* 
              <div class="row">
                <div class="col-md-6 mb-4">

                  <h6 class="mb-2 pb-1">Gender: </h6>

                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                      value="option1" checked />
                    <label class="form-check-label" for="femaleGender">Female</label>
                  </div>

                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                      value="option2" />
                    <label class="form-check-label" for="maleGender">Male</label>
                  </div>

                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender"
                      value="option3" />
                    <label class="form-check-label" for="otherGender">Other</label>
                  </div>

                </div>
              </div> */}
{/* 
              <div class="row">
                <div class="col-md-6 mb-4 pb-2">

                  <div class="form-outline">
                    <input type="tel" id="phoneNumber" class="form-control form-control-lg" />
                    <label class="form-label" for="phoneNumber">Phone Number</label>
                  </div>

                </div>
              </div> */}

              <div class="mt-4 pt-2">
                <input class="btn btn-primary btn-lg" type="submit" value="Submit" />
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Register
