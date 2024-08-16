import {
  BiEnvelopeOpen,
  BiGlobe,
  BiPhone,
  BiRightArrowAlt,
  FaFacebookF,
  FaInstagram,
  FaPalette,
} from "../shared/font-awesome-icons";

const Footer = () => {
  return (
    <>
      <div
        className="container-fluid bg-img text-white footer"
        style={{ marginTop: "90px" }}
      >
        <div className="container">
          <div className="row gx-5">
            <div className="col-lg-4 col-md-6">
              <div className="d-flex flex-column align-items-center justify-content-center text-center h-100 bg-primary border-inner p-4">
                <a href="index.html" className="navbar-brand">
                  <h1 className="m-0 font-primary text-white">
                    <FaPalette className="fs-1 text-dark me-3" />
                    #Shappening
                  </h1>
                </a>
                <p className="mt-3">
                  Shappening Art is a small Florida-based mixed media art
                  business. We welcome all gift-givers and trinket lovers. From
                  unique handmade customizable pieces to ready-made designs, we
                  have something for everyone.
                </p>
              </div>
            </div>
            <div className="col-lg-8 col-md-6">
              <div className="row gx-5">
                <div className="col-lg-4 col-md-12 pt-5 mb-5">
                  <h4 className="text-primary text-uppercase mb-4">
                    Get in Touch
                  </h4>
                  <div className="d-flex mb-2">
                    <BiGlobe
                      className="text-primary me-2"
                      style={{ width: "25px", height: "25px" }}
                    />
                    <p className="mb-0">Tampa, FL, United States</p>
                  </div>
                  <div className="d-flex mb-2">
                    <BiEnvelopeOpen
                      className="text-primary me-2"
                      style={{ width: "25px", height: "25px" }}
                    />
                    <p className="mb-0">shappeninginfo@gmail.com</p>
                  </div>
                  <div className="d-flex mb-2">
                    <BiPhone
                      className="text-primary me-2"
                      style={{ width: "25px", height: "25px" }}
                    />
                    <p className="mb-0">+012 345 67890</p>
                  </div>
                  <div className="d-flex mt-4">
                    <a
                      className="btn btn-lg btn-primary btn-lg-square border-inner rounded-0 me-2"
                      href="https://www.facebook.com/profile.php?id=100075080243008"
                    >
                      <FaFacebookF className="ps-1" />
                    </a>
                    <a
                      className="btn btn-lg btn-primary btn-lg-square border-inner rounded-0 me-2"
                      href="https://www.instagram.com/shappening_art/"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <FaInstagram />
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                  <h4 className="text-primary text-uppercase mb-4">
                    Quick Links
                  </h4>
                  <div className="d-flex flex-column justify-content-start">
                    <a className="text-secondary mb-2" href="#top">
                      <BiRightArrowAlt
                        className="text-primary me-2"
                        style={{
                          width: "25px",
                          height: "25px",
                        }}
                      />
                      Home
                    </a>
                    <a className="text-secondary mb-2" href="#about">
                      <BiRightArrowAlt
                        className="text-primary me-2"
                        style={{
                          width: "25px",
                          height: "25px",
                        }}
                      />
                      About
                    </a>
                    <a className="text-secondary mb-2" href="#shop">
                      <BiRightArrowAlt
                        className="text-primary me-2"
                        style={{
                          width: "25px",
                          height: "25px",
                        }}
                      />
                      Shop
                    </a>
                    <a className="text-secondary mb-2" href="#connect">
                      <BiRightArrowAlt
                        className="text-primary me-2"
                        style={{
                          width: "25px",
                          height: "25px",
                        }}
                      />
                      Connect
                    </a>
                    <a className="text-secondary mb-2" href="#e-gifts">
                      <BiRightArrowAlt
                        className="text-primary me-2"
                        style={{
                          width: "25px",
                          height: "25px",
                        }}
                      />
                      Gift Cards
                    </a>
                    <a className="text-secondary" href="#policies">
                      <BiRightArrowAlt
                        className="text-primary me-2"
                        style={{
                          width: "25px",
                          height: "25px",
                        }}
                      />
                      Policies
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                  <h4 className="text-primary text-uppercase mb-4">
                    Newsletter
                  </h4>
                  <p>
                    Amet justo diam dolor rebum lorem sit stet sea justo kasd
                  </p>
                  <form action="">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control border-white p-3"
                        placeholder="Your Email"
                      />
                      <button className="btn btn-primary">Sign Up</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid text-secondary bg-dark py-4">
        <div className="container text-center">
          <p className="mb-0">
            &copy; 2024{" "}
            <a className="text-white border-bottom" href="#">
              Shappening LLC
            </a>
            . All Rights Reserved. Created by{" "}
            <a
              className="text-white border-bottom"
              href="https://dq-heard.github.io/Portfolio/"
            >
              D. Heard
            </a>{" "}
            and{" "}
            <a
              className="text-white border-bottom"
              href="https://abrahamsj.github.io/Portfolio/"
            >
              J. Abrahams
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
