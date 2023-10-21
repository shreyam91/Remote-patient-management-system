// import React from 'react'
import heroimg01 from '../assets/images/hero-img01.png'
import heroimg02 from '../assets/images/hero-img02.png'
import heroimg03 from '../assets/images/hero-img03.png'
import icon01 from '../assets/images/icon01.png'
import icon02 from '../assets/images/icon02.png'
import icon03 from '../assets/images/icon03.png'
import about from '../assets/images/about.png'
import aboutcard from '../assets/images/about-card.png'
import featurecard from '../assets/images/about-card.png'
import featureimg from '../assets/images/feature-img.png'
import faqimg  from '../assets/images/faq-img.png'
import question from '../assets/data/question'

// import Doctor from '../../../pages/Doctor'
// import DoctorCard from '../../../pages/Doctor'

import {Link } from 'react-router-dom'
import {BsArrowRight} from 'react-icons/bs'

export default function Home() {
  return (<>
    {/* // hero section  */}
    <section className='container hero_section'>

      {/* container right side  */}
      <div className='container_right'>

        {/* Hero Content  */}
        <div>
          <h1 className='h1'>We help patients live a healthy, longer life.</h1>
          <h3 className='h3'>“With each challenge you conquer, you emerge stronger and wiser.”</h3>
          <button className='btn btn-info'>Request an Appointment</button>
        </div>

        {/* Hero Counter  */}
        <div> 
          <h2 className='h2'>1+</h2>
          <h4 className='h4'>Year of Experience</h4>
        </div>
        <div> 
          <h2 className='h2'>10+</h2>
          <h4 className='h4'>Doctor Available on our Portal</h4>
        </div>
        <div> 
          <h2 className='h2'>100%</h2>
          <h4 className='h4'>Patient Satisfaction</h4>
        </div>
        <div> 
          <h2 className='h2'>200%</h2>
          <h4 className='h4'>Patient Satisfaction</h4>
        </div>
      </div>    

      {/* container left side  */}
      {/* <div className='container_left'>
        {/* hero section  */}
        {/* <div className='img1'> 
          <img src={heroimg01} alt='img1' />
        </div>
        <div className='img2'> 
          <img src={heroimg02} alt='img2' />
        </div>
        <div className='img3'> 
          <img src={heroimg03} alt='img3' />
        </div>
      </div>  */}
    </section>

    {/*  Next section  */}
    <section>
      {/* arrange all items in the row and as well as in the card type.  */}
      <div className='container'>
        <div className='lg:w-[470px] mx-auto'>
      <h2 className='heading text-center'>Providing the best medical Services</h2>
      <h4 className='text-center'>World-class care for everyone. Our Patient Monitoring system offers, unmatched expert health care.</h4></div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
        <div className='py-[30px] px-5'>
         {/* find a doctor  */}
         <div className='flex-items-center justfy-center'>
        <img src={icon01} alt='img1' />
      </div>
      <div className='mt-[30px]'>
      <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'> Find a Doctor</h2>
      <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'> Find a Doctor</h2>
      <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'> Find a Doctor</h2>
      
      <h4 className='text-center'>World-class care for everyone. Our Patient Monitoring system offers, unmatched expert health care.</h4>

      <Link to='/doctor' className=''> 
      <BsArrowRight/>
      </Link>
        </div>
         {/* find a doctor 1 close  */}       
         
           {/* find a doctor  2 */}
           <div className='flex-items-center justfy-center'>
        <img src={icon02} alt='img1' />
      </div>
      <div className='mt-[30px]'>
      <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'> Find a Location</h2>
      
      <h4 className='text-center'>World-class care for everyone. Our Patient Monitoring system offers, unmatched expert health care.</h4>

      <Link to='/doctor' className=''> 
      <BsArrowRight/>
      </Link>
        </div>
         {/* find a doctor 1 close  */}
         
                  {/* find a doctor  3 */}
                  <div className='flex-items-center justfy-center'>
        <img src={icon03} alt='img1' />
      </div>
      <div className='mt-[30px]'>
      <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'> Book Appointment</h2>
      
      <h4 className='text-center'>World-class care for everyone. Our Patient Monitoring system offers, unmatched expert health care.</h4>

      <Link to='/doctor' className=''> 
      <BsArrowRight/>
      </Link>
        </div>
        <div className='mt-[30px]'>
      <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'> Book Appointment</h2>
      
      <h4 className='text-center'>World-class care for everyone. Our Patient Monitoring system offers, unmatched expert health care.</h4>

      <Link to='/doctor' className=''> 
      <BsArrowRight/>
      </Link>
        </div>
         {/* find a doctor 1 close  */}
      </div></div></div>

    </section>

      {/* About section  */}
      {/* <section>
      <div className='container'>
        {/* about img  */}
        <div>
          {/* <img src={about} alt='img1' /> */}
        {/* </div>
        <div>
          <img src={aboutcard} alt='img1' />
        </div> */}
        {/* about content  */}
         {/* <div className='content'>
          <h2> Proud to be the nationn best </h2>
          <h5> for 30 years in a row lorem ipsum...........</h5>
          <h5> for 30 years in a row lorem ipsum...........</h5>
          <Link to='/'>
            <button className='btn btn-primary'>Learn More</button>
          </Link>
        </div> */}
      </div>
      {/* </section>  */}

      {/* Service Section  */}
      {/* <section>
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
      </section> */}

      {/* Feature Section */}
      {/* <section>
      <div className='container'> */}
        {/* about img  */}
        <div>
          {/* <img src={featureimg} alt='img1' /> */}
        </div>
        <div>
          {/* <img src={featurecard} alt='img1' /> */}
        </div>
        {/* about content  */}
        {/* <div className='content'>
          <h2> Proud to be the nationn best </h2>
          <h5> for 30 years in a row lorem ipsum...........</h5>
          <h5> for 30 years in a row lorem ipsum...........</h5>
          <Link to='/'>
            <button className='btn btn-primary'>Learn More</button>
          </Link>
        </div>
      </div>
      </section> */}

      {/* Doctor  */}
      {/* <section>
      <div className='container'>
        <div className='lg:w-[470px] mx-auto'>
      <h2 className='heading text-center'>Our Best Doctor</h2>
      <h4 className='text-center'>World-class care for everyone. Our Patient Monitoring system offers, unmatched expert health care.</h4></div></div>
      </section> */}

      {/* FAQ */}
      {/* <!--Section: FAQ--> */}
<section>
  {/* make this section like card like next or below section check code from the section and add it to this section.  */}
  <h3 class="text-center mb-4 pb-2 text-primary fw-bold">FAQ</h3>
  <p class="text-center mb-5">
    Find the answers for the most frequently asked questions below
  </p>

  <div class="row">
    <div class="col-md-6 col-lg-4 mb-4">
      <h6 class="mb-3 text-primary"><i class="far fa-paper-plane text-primary pe-2"></i> A simple
        question?</h6>
      <p>
        <strong><u>Absolutely!</u></strong> We work with top payment companies which guarantees
        your
        safety and
        security. All billing information is stored on our payment processing partner.
      </p>
    </div>

    <div class="col-md-6 col-lg-4 mb-4">
      <h6 class="mb-3 text-primary"><i class="fas fa-pen-alt text-primary pe-2"></i> A question
        that
        is longer then the previous one?</h6>
      <p>
        <strong><u>Yes, it is possible!</u></strong> You can cancel your subscription anytime in
        your
        account. Once the subscription is
        cancelled, you will not be charged next month.
      </p>
    </div>

    <div class="col-md-6 col-lg-4 mb-4">
      <h6 class="mb-3 text-primary"><i class="fas fa-user text-primary pe-2"></i> A simple
        question?
      </h6>
      <p>
        Currently, we only offer monthly subscription. You can upgrade or cancel your monthly
        account at any time with no further obligation.
      </p>
    </div>

    <div class="col-md-6 col-lg-4 mb-4">
      <h6 class="mb-3 text-primary"><i class="fas fa-rocket text-primary pe-2"></i> A simple
        question?
      </h6>
      <p>
        Yes. Go to the billing section of your dashboard and update your payment information.
      </p>
    </div>

    <div class="col-md-6 col-lg-4 mb-4">
      <h6 class="mb-3 text-primary"><i class="fas fa-home text-primary pe-2"></i> A simple
        question?
      </h6>
      <p><strong><u>Unfortunately no</u>.</strong> We do not issue full or partial refunds for any
        reason.</p>
    </div>

    <div class="col-md-6 col-lg-4 mb-4">
      <h6 class="mb-3 text-primary"><i class="fas fa-book-open text-primary pe-2"></i> Another
        question that is longer than usual</h6>
      <p>
        Of course! We’re happy to offer a free plan to anyone who wants to try our service.
      </p>
    </div>
  </div>
</section>
{/* <!--Section: FAQ--> */}

      {/* testimonials  */}
      <section className='container'>

      

  <div class="row d-flex justify-content-center">
    <div class="col-md-10 col-xl-8 text-center">
      <h3 class="mb-4">Testimonials</h3>
      <p class="mb-4 pb-2 mb-md-5 pb-md-0">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet
        numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum
        quisquam eum porro a pariatur veniam.
      </p>
    </div>
  </div>
          {/* below code snippet is used to display the testimonials section in card from.  */}
  <div class="row">
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Ramesh</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="">Heart Patient</a>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Renuka</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="">Neuro Patient</a>
      </div>
    </div>
  </div>

  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Bhaubali</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        {/* make a star in place of below link or name. 👇🏻👇🏻👇🏻*/}
        {/* <a href="#" class="">Cardio Patient</a> */}
      </div>
    </div>
  </div>
</div>

  {/* <div class="row text-center">
    <div class="col-md-4 mb-5 mb-md-0">
      <div class="d-flex justify-content-center mb-4"> */}
        {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
          class="rounded-circle shadow-1-strong" width="150" height="150" /> */}
      {/* </div>
      <h5 class="mb-3">Maria Smantha</h5>
      <h6 class="text-primary mb-3">Web Developer</h6>
      <p class="px-xl-3">
        <i class="fas fa-quote-left pe-2"></i>Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic
        tenetur.
      </p>
      <ul class="list-unstyled d-flex justify-content-center mb-0">
        <li>
          <i class="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i class="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i class="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i class="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i class="fas fa-star-half-alt fa-sm text-warning"></i>
        </li>
      </ul>
    </div>
    <div class="col-md-4 mb-5 mb-md-0">
      <div class="d-flex justify-content-center mb-4"> */}
        {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
          class="rounded-circle shadow-1-strong" width="150" height="150" /> */}
      {/* </div>
      <h5 class="mb-3">Lisa Cudrow</h5>
      <h6 class="text-primary mb-3">Graphic Designer</h6>
      <p class="px-xl-3">
        <i class="fas fa-quote-left pe-2"></i>Ut enim ad minima veniam, quis nostrum
        exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid commodi.
      </p>
      <ul class="list-unstyled d-flex justify-content-center mb-0">
        <li>
          <i class="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i class="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i class="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i class="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i class="fas fa-star fa-sm text-warning"></i>
        </li>
      </ul>
    </div>
    <div class="col-md-4 mb-0">
      <div class="d-flex justify-content-center mb-4"> */}
        {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
          class="rounded-circle shadow-1-strong" width="150" height="150" /> */}
      {/* </div>
      <h5 class="mb-3">John Smith</h5>
      <h6 class="text-primary mb-3">Marketing Specialist</h6>
      <p class="px-xl-3">
        <i class="fas fa-quote-left pe-2"></i>At vero eos et accusamus et iusto odio
        dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.
      </p>
      <ul class="list-unstyled d-flex justify-content-center mb-0">
        <li>
          <i class="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i class="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i class="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i class="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i class="far fa-star fa-sm text-warning"></i>
        </li>
      </ul>
    </div>
  </div> */}
</section>

    </>
  )
}
