import React from 'react'


import {Link } from 'react-router-dom'
import {BsArrowRight} from 'react-icons/bs'

export default function Service() {
  return (
    <div>
      <section>
        <div className='container'>
          <h2> Our Medical Services</h2>
          <h5> Lorem ipsum </h5>
          <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <Link to='/' className=''> 
      <BsArrowRight/>
      </Link>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a short card.</p>
        <Link to='/' className=''> 
      <BsArrowRight/>
      </Link>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
        <Link to='/' className=''> 
      <BsArrowRight/>
      </Link>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <Link to='/' className=''> 
      <BsArrowRight/>
      </Link>
      </div>
    </div>
  </div>
</div>
        </div>
      </section>
    </div>
  )
}
