const About = () => {
  return (
    <div className="tg-about-area pt-100 pb-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6">
            <div className="tg-about-thumb mb-50">
              <img src="/assets/img/about/about-1.jpg" alt="About Us" />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="tg-about-content ml-50 mb-50">
              <div className="tg-section-title mb-25">
                <span className="tg-section-subtitle">About Us</span>
                <h2 className="tg-section-title-main">
                  We Are The Best Travel Agency
                </h2>
              </div>
              <p className="mb-25">
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis 
                nostrud exercitation.
              </p>
              <div className="tg-about-list mb-35">
                <ul>
                  <li>
                    <i className="fa-regular fa-check"></i>
                    Professional and Certified
                  </li>
                  <li>
                    <i className="fa-regular fa-check"></i>
                    Get Instant Tour Bookings
                  </li>
                  <li>
                    <i className="fa-regular fa-check"></i>
                    Get 50% Off Every First Booking
                  </li>
                </ul>
              </div>
              <div className="tg-about-btn">
                <a href="/about" className="tg-btn">
                  Learn More <i className="fa-regular fa-arrow-right-long"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;