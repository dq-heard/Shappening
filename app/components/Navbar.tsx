import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { UserCartMenu } from "../components";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const sectionsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    import("bootstrap");
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const sectionTitles = [
    "Home",
    "About",
    "Shop",
    "Connect",
    "E-Gifts",
    "Policies",
  ];

  const handleNavClick = (section: string) => {
    const sectionElement = sectionsRef.current.find(
      (el) => el.id === section.toLowerCase()
    );

    if (sectionElement) {
      sectionElement.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      let current = "";
      sectionsRef.current.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 90 && rect.bottom >= window.innerHeight / 5) {
          current = section.id;
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className={`navbar navbar-expand-lg bg-dark navbar-dark shadow-sm py-3 px-3 p-lg-0 ${sticky ? "sticky-top" : ""}`}
      id="nav"
    >
      <Link href="/" className="navbar-brand d-block d-lg-none">
        <h1 className="m-0 font-primary text-white">#Shappening</h1>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <nav className="navbar-nav ms-auto mx-lg-auto py-0">
          <div className="d-flex text-center text-white py-4 border-white border-bottom d-lg-none">
            <UserCartMenu />
          </div>
          {sectionTitles.map((section, index) => (
            <li key={index}>
              <Link
                href={`#${section.toLowerCase()}`}
                className="nav-link nav-item"
                onClick={() => handleNavClick(section)}
              >
                {section}
              </Link>
            </li>
          ))}
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
