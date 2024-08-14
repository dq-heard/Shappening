import Facts from "./Facts";

import { FaGift, FaHandHoldingHeart } from "../shared/font-awesome-icons";

const About = () => {
  return (
    <section className="container-fluid pt-5 px-0" id="about">
      <div className="container px-5 px-lg-0">
        <div className="section-title position-relative text-center mx-auto mb-5 pb-3 max-w-600">
          <h2 className="text-primary font-secondary">What's Shappening?</h2>
          <h1 className="display-4 text-uppercase">Choose Your Canvas</h1>
        </div>
        <div className="row gx-5 justify-content-lg-center">
          <div
            className="col-xl-5 mb-5 mb-xl-0"
            style={{ minHeight: "400px", maxWidth: "672px" }}
          >
            <div className="position-relative h-100">
              <img
                className="position-absolute w-100 h-100"
                src={"/about.webp"}
                style={{ objectFit: "cover", maxWidth: "672px" }}
              />
            </div>
          </div>
          <div className="col-xl-6 pb-5" style={{ maxWidth: "672px" }}>
            <h4 className="mb-4">
              If you see a piece that you like, get it! Allow your imagination
              to go wild as you decorate your life or gift them to others.
            </h4>
            <p className="mb-5">
              The names of our pieces don’t dictate their function, they merely
              offer a suggestion. Don’t stifle your creativity! Be free and send
              us some pictures with your ideas! Share your vision and let’s
              marvel at your unique interpretations together.
            </p>
            <div className="row g-5">
              <div className="col-sm-6">
                <div
                  className="d-flex align-items-center justify-content-center bg-primary border-inner mb-4"
                  style={{ width: "90px", height: "90px" }}
                >
                  <FaHandHoldingHeart
                    className="text-white"
                    style={{ width: "45px", height: "45px" }}
                  />
                </div>
                <h4 className="text-uppercase">Made to Order</h4>
                <p className="mb-0">
                  The fastest we can realistically ship is 3-4 days. Most pieces
                  take 8-12 hours to dry depending on various factors, such as
                  temperature and resin used.
                </p>
              </div>
              <div className="col-sm-6">
                <div
                  className="d-flex align-items-center justify-content-center bg-primary border-inner mb-4"
                  style={{ width: "90px", height: "90px" }}
                >
                  <FaGift
                    className="text-white"
                    style={{ width: "45px", height: "45px" }}
                  />
                </div>
                <h4 className="text-uppercase">One of a Kind</h4>
                <p className="mb-0">
                  Our functional art is geared toward holding personal value for
                  both you & your loved ones. Customize it and make something
                  that ends up being special.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Facts />
    </section>
  );
};

export default About;
