import { Link } from "@inertiajs/react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaPaperPlane } from "react-icons/fa";
import { src_config } from "@/Config/Config";
export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="container relative">

        <div className="sofa-img">
          <img src={`${src_config}images/sofa.png`} alt="Sofa" className="img-fluid" />
        </div>

        <div className="row">
          <div className="col-lg-8">
            <div className="subscription-form">
              <h3 className="d-flex align-items-center">
                <span className="me-1">
                  <img src={`${src_config}images/envelope-outline.svg`} alt="Envelope" className="img-fluid" />
                </span>
                <span>Subscribe to Newsletter</span>
              </h3>

              <form action="#" className="row g-3">
                <div className="col-auto">
                  <input type="text" className="form-control" placeholder="Enter your name" />
                </div>
                <div className="col-auto">
                  <input type="email" className="form-control" placeholder="Enter your email" />
                </div>
                <div className="col-auto">
                  <button className="btn btn-primary" type="submit">
                    <FaPaperPlane />
                  </button>
                </div>
              </form>

            </div>
          </div>
        </div>

        <div className="row g-5 mb-5">
          <div className="col-lg-4">
            <div className="mb-4 footer-logo-wrap">
              <Link href="#" className="footer-logo">Furni<span>.</span></Link>
            </div>
            <p className="mb-4">
              Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada.
              Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant
            </p>

            <ul className="list-unstyled custom-social">
              <li><Link href="#"><FaFacebookF /></Link></li>
              <li><Link href="#"><FaTwitter /></Link></li>
              <li><Link href="#"><FaInstagram /></Link></li>
              <li><Link href="#"><FaLinkedin /></Link></li>
            </ul>
          </div>

          <div className="col-lg-8">
            <div className="row links-wrap">
              <div className="col-6 col-sm-6 col-md-3">
                <ul className="list-unstyled">
                  <li><Link href="#">About us</Link></li>
                  <li><Link href="#">Services</Link></li>
                  <li><Link href="#">Blog</Link></li>
                  <li><Link href="#">Contact us</Link></li>
                </ul>
              </div>

              <div className="col-6 col-sm-6 col-md-3">
                <ul className="list-unstyled">
                  <li><Link href="#">Support</Link></li>
                  <li><Link href="#">Knowledge base</Link></li>
                  <li><Link href="#">Live chat</Link></li>
                </ul>
              </div>

              <div className="col-6 col-sm-6 col-md-3">
                <ul className="list-unstyled">
                  <li><Link href="#">Jobs</Link></li>
                  <li><Link href="#">Our team</Link></li>
                  <li><Link href="#">Leadership</Link></li>
                  <li><Link href="#">Privacy Policy</Link></li>
                </ul>
              </div>

              <div className="col-6 col-sm-6 col-md-3">
                <ul className="list-unstyled">
                  <li><Link href="#">Nordic Chair</Link></li>
                  <li><Link href="#">Kruzo Aero</Link></li>
                  <li><Link href="#">Ergonomic Chair</Link></li>
                </ul>
              </div>
            </div>
          </div>

        </div>

        <div className="border-top copyright">
          <div className="row pt-4">
            <div className="col-lg-6">
              <p className="mb-2 text-center text-lg-start">
                Copyright &copy; {new Date().getFullYear()}. All Rights Reserved. &mdash; Designed with love by{" "}
                <a href="https://untree.co" target="_blank" rel="noopener noreferrer">Untree.co</a> Distributed By{" "}
                <a href="https://themewagon.com" target="_blank" rel="noopener noreferrer">ThemeWagon</a>
              </p>
            </div>

            <div className="col-lg-6 text-center text-lg-end">
              <ul className="list-unstyled d-inline-flex ms-auto">
                <li className="me-4"><Link href="#">Terms &amp; Conditions</Link></li>
                <li><Link href="#">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
