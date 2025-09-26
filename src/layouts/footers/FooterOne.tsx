import { Link } from "react-router-dom";

const FooterOne = () => {
  return (
    <footer className="tg-footer-area">
      <div className="tg-footer-top pb-50 pt-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="tg-footer-widget tg-footer-widget-1 mb-50">
                <div className="tg-footer-logo mb-25">
                  <Link to="/">
                    <img src="/assets/img/logo/logo.png" alt="Tourex" />
                  </Link>
                </div>
                <p className="mb-25">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor
                </p>
                <div className="tg-footer-social">
                  <a href="#"><i className="fab fa-facebook-f"></i></a>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                  <a href="#"><i className="fab fa-linkedin-in"></i></a>
                  <a href="#"><i className="fab fa-instagram"></i></a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="tg-footer-widget tg-footer-widget-2 mb-50">
                <h4 className="tg-footer-widget-title">Quick Links</h4>
                <ul>
                  <li><Link to="/about">About Us</Link></li>
                  <li><Link to="/tour-grid-1">Tours</Link></li>
                  <li><Link to="/hotel-grid">Hotels</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="tg-footer-widget tg-footer-widget-3 mb-50">
                <h4 className="tg-footer-widget-title">Support</h4>
                <ul>
                  <li><Link to="/faq">FAQ</Link></li>
                  <li><Link to="/team">Team</Link></li>
                  <li><Link to="/pricing">Pricing</Link></li>
                  <li><Link to="/blog-1">Blog</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="tg-footer-widget tg-footer-widget-4 mb-50">
                <h4 className="tg-footer-widget-title">Contact Info</h4>
                <div className="tg-footer-contact">
                  <div className="tg-footer-contact-item">
                    <i className="fa-regular fa-phone"></i>
                    <span>+123 5959 66</span>
                  </div>
                  <div className="tg-footer-contact-item">
                    <i className="fa-regular fa-envelope"></i>
                    <span>info@tourex.com</span>
                  </div>
                  <div className="tg-footer-contact-item">
                    <i className="fa-regular fa-location-dot"></i>
                    <span>New York, USA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tg-footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="tg-footer-bottom-content text-center">
                <p>© 2024 Tourex. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterOne;