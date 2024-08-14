import { useState, useEffect } from "react";

import { FaArrowUp } from "../shared/font-awesome-icons";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const checkScrollTop = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, []);

  return (
    isVisible && (
      <a
        href="#"
        className="btn btn-primary border-inner py-3 fs-4 back-to-top"
        onClick={scrollToTop}
      >
        <FaArrowUp />
      </a>
    )
  );
};

export default BackToTop;
