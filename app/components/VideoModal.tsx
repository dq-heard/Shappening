import { FC, useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";

type VideoModalProps = {
  videoSrc: string;
  show: boolean;
  onClose: () => void;
};

const VideoModal: FC<VideoModalProps> = ({ videoSrc, show, onClose }) => {
  const [iframeSrc, setIframeSrc] = useState("");

  useEffect(() => {
    setIframeSrc(`${videoSrc}?autoplay=1&modestbranding=1&showinfo=0`);
  }, [videoSrc]);

  return (
    <Modal show={show} onHide={onClose} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Shappening Art</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="ratio ratio-16x9">
          <iframe
            className="embed-responsive-item"
            src={iframeSrc}
            allowFullScreen
            allow="autoplay"
          ></iframe>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default VideoModal;
