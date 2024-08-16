import { useState, useEffect } from "react";
import { FaArrowUp } from "../shared/font-awesome-icons";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const checkScrollTop = () => {
    if (typeof window !== "undefined" && window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", checkScrollTop);
      return () => window.removeEventListener("scroll", checkScrollTop);
    }
  }, []);

  return (
    typeof window !== "undefined" &&
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
