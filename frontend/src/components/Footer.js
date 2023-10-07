import React from 'react'
import {Link} from 'react-router-dom'
import logo from '..//.//assets/images/logo.png'


const quickLinks01=[
  {
    path: '/home',
    display:'Home'
  },
  {
    path: '/',
    display:'About Us'
  },
  {
    path: '/doctors',
    display:'Find a Doctor'
  },
  {
    path: '/contact',
    display:'Contact Us'
  },
{
    path: '/',
    display:'Book an Appointment'
  },
]
const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer>
      <div className='container'>
        <img src={logo} alt='' />
        <p>Copyright &copy; {year} developed by Developer all rights reserved.</p>

        <h2>Quick links</h2>
        <ul>
        {quickLinks01.map((item,index)=> (<li key={index}><Link to={item.path}>{item.display}</Link></li>))}</ul>
      </div>
    </footer>
  )
}

export default Footer
