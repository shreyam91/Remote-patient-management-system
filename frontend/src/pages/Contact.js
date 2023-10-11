import React from 'react'

export default function Contact() {
  return (
    <div class="container contact">
	<div class="row">
		<div class="col-md-3">
			<div class="contact-info">
				<img src="https://image.ibb.co/kUASdV/contact-image.png" alt="image"/>
				<h2>Contact Us</h2>
				<h4>We would love to hear from you !</h4>
			</div>
		</div>
		<div class="card">
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
		<div class="col-md-9">
			<div class="contact-form">
				<div class="form-group">
				  {/* <label class="control-label col-sm-2" for="fname">First Name:</label> */}
				  <div class="col-sm-10">          
					<input type="text" class="form-control" id="fname" placeholder="Enter Your Name" name="name" />
				  </div>
				</div>
				<div class="form-group">
				  {/* <label class="control-label col-sm-2" for="lname">Last Name:</label> */}
				  <div class="col-sm-10">          
					{/* <input type="text" class="form-control" id="lname" placeholder="Enter Last Name" name="lname" /> */}
				  </div>
				</div>
				{/* <div class="form-group"> */}
				  {/* <label class="control-label col-sm-2" for="email">Email:</label> */}
				  <div class="col-sm-10">
					<input type="email" class="form-control" id="email" placeholder="Enter email" name="email" />
				  {/* </div> */}
				</div>
				<div class="form-group">
				  {/* <label class="control-label col-sm-2" for="comment">Comment:</label> */}
				  <div class="col-sm-10">
					<textarea class="form-control" rows="3" id="comment"></textarea>
				  </div>
				</div>
				<div class="form-group">        
				  <div class="col-sm-offset-2 col-sm-10">
					<button type="submit" class="btn btn-default">Submit</button>
				  </div>
				</div>
			</div>
		</div>
	</div>
</div>
  )
}
