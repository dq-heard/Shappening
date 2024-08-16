import { useState, useEffect, useRef } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { UserCartMenu } from "../components";

const NavbarComponent: React.FC = () => {
  const [sticky, setSticky] = useState(false);
  const sectionsRef = useRef<HTMLElement[]>([]);

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

  const handleScrollSpy = () => {
    let current = "";
    sectionsRef.current.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 90 && rect.bottom >= window.innerHeight / 5) {
        current = section.id;
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollSpy);
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      sticky={sticky ? "top" : undefined}
      className="shadow-sm py-3 px-3 p-lg-0"
    >
      <Navbar.Brand href="/" className="d-block d-lg-none">
        <h1 className="m-0 font-primary text-white">#Shappening</h1>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarCollapse">
        <span className="navbar-toggler-icon"></span>
      </Navbar.Toggle>
      <Navbar.Collapse id="navbarCollapse">
        <Nav className="ms-auto mx-lg-auto py-0">
          <div className="d-flex text-center text-white py-4 border-white border-bottom d-lg-none">
            <UserCartMenu />
          </div>
          {sectionTitles.map((section, index) => (
            <Nav.Item key={index}>
              <Nav.Link
                href={`#${section.toLowerCase()}`}
                onClick={() => handleNavClick(section)}
              >
                {section}
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
