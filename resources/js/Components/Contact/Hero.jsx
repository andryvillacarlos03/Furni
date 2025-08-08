import React from "react";
import { src_config } from "@/Config/Config"; // Optional: for dynamic image paths

const ContactHero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-5">
            <div className="intro-excerpt">
              <h1>Contact</h1>
              <p className="mb-4">
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. 
                Aliquam vulputate velit imperdiet dolor tempor tristique.
              </p>
              <p>
                <a href="#" className="btn btn-secondary me-2">
                  Shop Now
                </a>
                <a href="#" className="btn btn-white-outline">
                  Explore
                </a>
              </p>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="hero-img-wrap">
              <img
                src={`${src_config}images/couch.png`}
                alt="Couch"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
