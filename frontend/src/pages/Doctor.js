import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

import { doctors } from "../assets/data/doctors";

const Doctor = ({ doctor }) => {
  console.log(doctors, "doctors");
  return (
    <section>
      <div className="container">
        <h2> Our Doctors</h2>
        <h5> Lorem ipsum </h5>
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card h-100">
              <div class="card-body">
                {/* <h5 class="card-title">{name}</h5> */}
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <Link to="/" className="">
                  <BsArrowRight />
                </Link>
              </div>
            </div>
          </div>
          {doctors.map((val,i) => {
            return (
              <div class="col" key={val.id+ "doc"}>
                <div class="card h-100">
                  <div class="card-body">
                    <h5 class="card-title">{val.name}</h5>
                    <p class="card-text">{val.specialty}</p>
                    <Link to="/" className="">
                      <BsArrowRight />
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default Doctor;