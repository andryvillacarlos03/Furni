import { src_config } from "@/Config/Config";
import React from "react";

const OurTeam = () => {
  return (
    <div className="untree_co-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-5 mx-auto text-center">
            <h2 className="section-title">Our Team</h2>
          </div>
        </div>

        <div className="row">
          {/* Column 1 */}
          <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
           <img
            src={`${src_config}images/andry2.jpg`}
            className="w-60 h-48 object-cover rounded-lg mb-5 mx-auto"
            alt="Andry Villacarlos"
            />

            <h3>
              <a href="#">
                <span>Andry</span>Villacarlos
              </a>
            </h3>
            <span className="d-block position mb-4">CEO</span>
            <p>
              Separated they live in. Separated they live in Bookmarksgrove
              right at the coast of the Semantics, a large language ocean.
            </p>
            <p className="mb-0">
              <a href="#" className="more dark">
                Learn More <span className="icon-arrow_forward"></span>
              </a>
            </p>
          </div>

          {/* Column 2 */}
          <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
           <img
            src={`${src_config}images/negneg.jpg`}
            className="w-60 h-48 object-cover rounded-lg mb-5 mx-auto"
            alt="Chrysler Duaso"
            />

            <h3>
              <a href="#">
                <span>Chrysler</span> Duaso
              </a>
            </h3>
            <span className="d-block position mb-4">Atty.</span>
            <p>
              Separated they live in. Separated they live in Bookmarksgrove
              right at the coast of the Semantics, a large language ocean.
            </p>
            <p className="mb-0">
              <a href="#" className="more dark">
                Learn More <span className="icon-arrow_forward"></span>
              </a>
            </p>
          </div>

          {/* Column 3 */}
          <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
          <img
            src={`${src_config}images/mine.jfif`}
            className="w-60 h-48 object-cover rounded-lg mb-5 mx-auto"
            alt="Charmine Yapac"
            />
            <h3>
              <a href="#">
                <span>Charmine</span> Yapac
              </a>
            </h3>
            <span className="d-block position mb-4">Atty.</span>
            <p>
              Separated they live in. Separated they live in Bookmarksgrove
              right at the coast of the Semantics, a large language ocean.
            </p>
            <p className="mb-0">
              <a href="#" className="more dark">
                Learn More <span className="icon-arrow_forward"></span>
              </a>
            </p>
          </div>

          {/* Column 4 */}
          <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
            <img
                src={`${src_config}images/walwal.jpg`}
                className="w-60 h-48 object-cover rounded-lg mb-5 mx-auto"
                alt="Mark Niel Resaba"
                />
            <h3>
              <a href="#">
                <span>Mark Niel</span> Resaba
              </a>
            </h3>
            <span className="d-block position mb-4">Web Developer</span>
            <p>
              Separated they live in. Separated they live in Bookmarksgrove
              right at the coast of the Semantics, a large language ocean.
            </p>
            <p className="mb-0">
              <a href="#" className="more dark">
                Learn More <span className="icon-arrow_forward"></span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
