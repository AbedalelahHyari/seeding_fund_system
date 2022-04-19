import React from "react";
import { MDBFooter } from "mdb-react-ui-kit";

const Footer = () => {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-google"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </section>

      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>Seeding Fund
              </h6>
              <p>
                we are an organization interesting in growing and helping all
                sectors that will aimed to achieve the digital transformation in
                different way.
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">services</h6>
              <p>
                <a href="#!" className="text-reset">
                  consultation
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  business analyst
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  requirement gathering
                </a>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="/home" className="text-reset">
                  Home
                </a>
              </p>
              <p>
                <a href="/profile" className="text-reset">
                  Profile
                </a>
              </p>
              <p>
                <a href="/funding" className="text-reset">
                  Funding
                </a>
              </p>
              <p>
                <a href="/about" className="text-reset">
                  about
                </a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <i className="fas fa-home me-3"></i> Amman, Jordan
              </p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                abedalelah.hyari@gmail.com
              </p>
              <p>
                <i className="fas fa-phone me-3"></i> +962 77 212 8019
              </p>
            </div>
          </div>
        </div>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2021 Copyright:
        <a className="text-reset fw-bold"> seedingfund.com</a>
      </div>
    </MDBFooter>
  );
};

export default Footer;
