import Link from "next/link";

import { UserCartMenu } from "../components";
import { FaPalette, FaRegEnvelope } from "../shared/font-awesome-icons";

const Topbar: React.FC = () => {
  return (
    <section className="container-fluid px-0 d-none d-lg-block" id="home">
      <div className="row gx-0">
        <div className="col-lg-4 text-center bg-secondary py-4">
          <div className="d-inline-flex align-items-center justify-content-center">
            <FaRegEnvelope className="fs-1 text-primary me-3" />
            <div className="text-start">
              <h6 className="text-uppercase font-tertiary mb-0">Email Us</h6>
              <span>shappeninginfo@gmail.com</span>
            </div>
          </div>
        </div>
        <div className="col-lg-4 text-center bg-primary border-inner py-4">
          <div className="d-inline-flex align-items-center justify-content-center">
            <Link href="/" className="navbar-brand">
              <h1 className="m-0 font-primary text-white">
                <FaPalette className="fs-1 text-dark me-3" />
                #Shappening
              </h1>
            </Link>
          </div>
        </div>
        <div className="col-lg-4 text-center bg-secondary py-4">
          <div className="d-inline-flex align-items-center justify-content-center">
            <UserCartMenu />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Topbar;
