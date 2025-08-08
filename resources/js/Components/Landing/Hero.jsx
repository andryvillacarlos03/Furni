import { Link } from "@inertiajs/react";
import { src_config } from "@/Config/Config";

export default function Hero() {
  return (
    <div className="hero">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-5">
            <div className="intro-excerpt">
              <h1>
                Modern Interior <span className="d-block">Design Studio</span>
              </h1>
              <p className="mb-4">
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
                Aliquam vulputate velit imperdiet dolor tempor tristique.
              </p>
              <p>
                <Link href="/shop" className="btn btn-secondary me-2">
                  Shop Now
                </Link>
                <Link href="/explore" className="btn btn-white-outline">
                  Explore
                </Link>
              </p>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="hero-img-wrap">
              <img
                src={`${src_config}images/couch.png`}
                className="img-fluid"
                alt="Couch"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
