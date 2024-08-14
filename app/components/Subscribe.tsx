import Link from "next/link";

import { FaArrowRightLong } from "../shared/font-awesome-icons";

const Subscribe = () => {
  return (
    <div
      className="container-fluid service position-relative px-5 mt-5"
      style={{ marginBottom: "135px" }}
    >
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-4 col-md-6">
            <div className="bg-primary border-inner text-center text-white p-5">
              <h4 className="text-uppercase mb-3">Coasters</h4>
              <p>
                Ipsum ipsum clita erat amet dolor sit justo sea eirmod diam stet
                sit justo amet tempor amet kasd lorem dolor ipsum
              </p>
              <Link className="text-uppercase text-dark" href="#">
                Read More <FaArrowRightLong />
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="bg-primary border-inner text-center text-white p-5">
              <h4 className="text-uppercase mb-3">Trays</h4>
              <p>
                Ipsum ipsum clita erat amet dolor sit justo sea eirmod diam stet
                sit justo amet tempor amet kasd lorem dolor ipsum
              </p>
              <Link className="text-uppercase text-dark" href="#">
                Read More <FaArrowRightLong />
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="bg-primary border-inner text-center text-white p-5">
              <h4 className="text-uppercase mb-3">Keychains</h4>
              <p>
                Ipsum ipsum clita erat amet dolor sit justo sea eirmod diam stet
                sit justo amet tempor amet kasd lorem dolor ipsum
              </p>
              <Link className="text-uppercase text-dark" href="#">
                Read More <FaArrowRightLong />
              </Link>
            </div>
          </div>

          <div className="col-lg-12 col-md-6 text-center">
            <h1 className="text-uppercase text-light">Subscribe</h1>
            <h4 className="text-light mb-4">
              First time subscribers get 10% off their first purchase.
            </h4>
            <form
              action=""
              style={{ maxWidth: "600px" }}
              className="text-center mx-auto"
            >
              <div className="input-group">
                <input
                  type="text"
                  className="form-control border-white p-3"
                  placeholder="Your e-Mail"
                />
                <button className="btn btn-primary border-inner py-3 px-5">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
