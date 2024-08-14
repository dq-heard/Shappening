import { FaLocationDot, FaStar } from "../shared/font-awesome-icons";

const Facts = () => {
  return (
    <div className="facts-bg">
      <div className="container py-5 px-5 px-xl-0">
        <div className="row gx-5 gy-4">
          <div
            className="row pt-5 px-3 mx-auto col-xl-6 py-xl-4 align-items-xl-center"
            style={{ maxWidth: "720px" }}
          >
            <div className="col d-block d-sm-flex">
              <div
                className="bg-primary border-inner d-flex align-items-center justify-content-center mb-3"
                style={{ width: "60px", height: "60px" }}
              >
                <FaStar className="text-white" />
              </div>
              <div className="pt-2 ps-sm-4 pt-sm-0">
                <h6 className="text-primary text-uppercase">Started in</h6>
                <h1 className="display-5 text-white mb-0">2020</h1>
              </div>
            </div>

            <div className="col d-block d-sm-flex">
              <div
                className="bg-primary border-inner d-flex align-items-center justify-content-center mb-3"
                style={{ width: "60px", height: "60px" }}
              >
                <FaLocationDot className="text-white" />
              </div>
              <div className="pt-2 ps-sm-4 pt-sm-0">
                <h6 className="text-primary text-uppercase">Made in the</h6>
                <h1 className="display-5 text-white mb-0">813</h1>
              </div>
            </div>
          </div>
          <div
            className="col-xl-6 py-xl-4 mx-lg-auto"
            style={{ maxWidth: "720px" }}
          >
            <h4 className="text-primary mb-3 mb-xl-4">
              We appreciate your interest in our products.
            </h4>
            <p className="text-white">
              Our vision is to become the foremost provider of resin-based
              gifts, with a primary focus on fostering authentic personal
              connections. At the core of Shappening Art are our three
              fundamental values: quality, dedication, and unwavering passion.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facts;
