import { FaFacebookF, FaInstagram } from "../shared/font-awesome-icons";

const Connect = () => {
  return (
    <section className="container-fluid py-5" id="connect">
      <div className="container">
        <div
          className="section-title position-relative text-center mx-auto mb-5 pb-3"
          style={{ maxWidth: "600px" }}
        >
          <h2 className="text-primary font-secondary">Truly Resin-ating</h2>
          <h1 className="display-4 text-uppercase">Meet the Founder</h1>
        </div>
        <div className="row g-5">
          <div className="col-xxl-7 mx-lg-auto mx-xxl-none">
            <figure className="figure bg-light p-3">
              <i className="fas fa-quote-left fa-2x mb-3"></i>
              <blockquote className="blockquote pb-3">
                <p>
                  The most important things in life are the connections you make
                  with others.
                </p>
              </blockquote>
              <figcaption className="blockquote-footer mb-0">
                Tom Ford
              </figcaption>
            </figure>
            <h4 className="mb-4 text-primary">
              Our products are here to help you do just that.
            </h4>
            <p>
              Janique migrated to the US from Jamaica, which shows up as an
              inspiration in many of her crafts. Despite holding a B.S. in
              Biology, she never let go of her passion for art. Working with
              ceramics, mixed-media, and graphics kept her versatility and
              creativity on display. The inception of Shappening Art during the
              pandemic is a reflection of Janique’s ability to find light in the
              darkest times.
            </p>
            <p>
              The loss of Janique's grandmother, a staunch supporter of her
              endeavors, became an all too real reminder to use this platform to
              help others commemorate and celebrate their loved ones. She felt
              that this would be the best way to continue honoring the memory of
              someone so close to her.
            </p>
            <p>
              Each product created at Shappening Art carries a piece of
              Janique's heart and her grandmother’s legacy, making them not just
              items, but symbols of love and remembrance. This venture is a
              perfect blend of her artistic skills and personal experiences,
              making Shappening a truly unique business.
            </p>
          </div>
          <div className="col-xxl-4 d-none d-xxl-block">
            <div className="team-item">
              <div className="position-relative overflow-hidden">
                <img className="img-fluid w-100" src={"/founder.webp"} alt="" />
                <div className="team-overlay w-100 h-100 position-absolute top-50 start-50 translate-middle d-flex align-items-center justify-content-center">
                  <div className="d-flex align-items-center justify-content-start">
                    <a
                      className="btn btn-lg btn-primary btn-lg-square border-inner rounded-0 me-2"
                      href="https://www.facebook.com/profile.php?id=100075080243008"
                    >
                      <FaFacebookF className="pe-1" />
                    </a>
                    <a
                      className="btn btn-lg btn-primary btn-lg-square border-inner rounded-0 me-2"
                      href="https://www.instagram.com/shappening_art/"
                    >
                      <FaInstagram
                        style={{
                          paddingRight: ".5rem",
                          width: "25px",
                          height: "25px",
                        }}
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-dark border-inner text-center p-4">
                <h4 className="text-uppercase text-primary">
                  Janique Abrahams
                </h4>
                <p className="text-white m-0">Owner</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connect;
