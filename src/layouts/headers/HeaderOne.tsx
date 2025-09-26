import { Link } from "react-router-dom";
import { useState } from "react";

const HeaderOne = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="tg-header-top d-none d-lg-block">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="tg-header-top-left">
                <span><i className="fa-regular fa-phone"></i> +123 5959 66</span>
                <span><i className="fa-regular fa-envelope"></i> info@tourex.com</span>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="tg-header-top-right">
                <div className="tg-header-top-social">
                  <a href="#"><i className="fab fa-facebook-f"></i></a>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                  <a href="#"><i className="fab fa-linkedin-in"></i></a>
                  <a href="#"><i className="fab fa-instagram"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tg-header-middle">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-3 col-lg-2 col-md-6 col-6">
              <div className="logo">
                <Link to="/">
                  <svg width="150" height="40" viewBox="0 0 150 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="150" height="40" rx="8" fill="#560CE3"/>
                    <text x="75" y="25" textAnchor="middle" fill="white" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="700">Tourex</text>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="col-xl-6 col-lg-7 d-none d-lg-block">
              <div className="main-menu">
                <nav>
                  <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">Features</Link></li>
                    <li><Link to="/tour-grid-1">Pages</Link></li>
                    <li><Link to="/blog-1">Blogs</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-6">
              <div className="header-right d-flex align-items-center justify-content-end">
                <div className="header-cart">
                  <Link to="/cart">
                    <i className="fa-sharp fa-solid fa-bag-shopping"></i>
                    <span>0</span>
                  </Link>
                </div>
                <div className="header-login">
                  <Link to="/login">
                    <i className="fa-regular fa-user"></i> Login
                  </Link>
                </div>
                <div className="mobile-menu-toggle d-lg-none">
                  <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <i className="fa-sharp fa-solid fa-bars"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderOne;