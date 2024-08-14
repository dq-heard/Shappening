import { useEffect, useRef } from "react";
import { Modal } from "bootstrap";

type VideoModalProps = {
  videoSrc: string;
  onClose: () => void;
};

const VideoModal: React.FC<VideoModalProps> = ({ videoSrc, onClose }) => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const modalInstanceRef = useRef<Modal | null>(null); // Ref to store Bootstrap's Modal instance

  useEffect(() => {
    const modalElement = modalRef.current;
    if (modalElement) {
      modalInstanceRef.current = new Modal(modalElement, {
        backdrop: "static",
        keyboard: false,
      });

      modalInstanceRef.current.show();

      return () => {
        if (modalInstanceRef.current) {
          modalInstanceRef.current.hide();
          modalInstanceRef.current.dispose();
        }
      };
    }
  }, [onClose]);

  useEffect(() => {
    // Update iframe src when videoSrc changes
    const modalElement = modalRef.current;
    if (modalElement) {
      const iframeElement = modalElement.querySelector("iframe");
      if (iframeElement) {
        iframeElement.src = `${videoSrc}?autoplay=1&modestbranding=1&showinfo=0`;
      }
    }
  }, [videoSrc]);

  return (
    <div
      ref={modalRef}
      className="modal fade"
      id="videoModal"
      tabIndex={-1}
      aria-labelledby="videoModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="videoModalLabel">
              Shappening Art
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">
            <div className="ratio ratio-16x9">
              <iframe
                className="embed-responsive-item"
                src={videoSrc}
                id="video"
                allowFullScreen
                allow="autoplay"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
