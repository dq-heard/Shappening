import { useState } from "react";
import VideoModal from "./VideoModal";

const Hero: React.FC = () => {
  const [videoSrc, setVideoSrc] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);

  const handlePlayClick = (src: string): void => {
    setVideoSrc(src);
    setShowModal(true);
  };

  return (
    <section className="container-fluid bg-primary py-5 mb-5 hero-header">
      <div className="container py-5">
        <div className="row justify-content-start">
          <div className="col-lg-8 text-center text-lg-start">
            <h1 className="font-secondary text-primary mb-4">
              Creativity Meets Resin
            </h1>
            <h1 className="display-1 text-uppercase text-white mb-4">
              Quality Crafts
            </h1>
            <h1 className="text-uppercase text-white">
              for Quality Connections
            </h1>
            <div className="d-flex align-items-center justify-content-center justify-content-lg-start pt-5">
              <a
                href="#about"
                className="btn btn-primary border-inner py-3 px-5 me-5"
              >
                Learn More
              </a>
              <button
                type="button"
                className="btn-play"
                onClick={() => handlePlayClick("/about.mp4")}
              >
                <span></span>
              </button>
              <h5 className="font-weight-normal text-white m-0 ms-4 d-none d-sm-block">
                Play Video
              </h5>
            </div>
          </div>
        </div>
      </div>

      <VideoModal
        videoSrc={videoSrc}
        show={showModal}
        onClose={() => setShowModal(false)}
      />
    </section>
  );
};

export default Hero;
