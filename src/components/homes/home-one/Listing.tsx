const Listing = () => {
  return (
    <div className="tg-listing-area pt-70 pb-100">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="tg-section-title text-center mb-60">
              <span className="tg-section-subtitle">Popular Tours</span>
              <h2 className="tg-section-title-main">Featured Tour Packages</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="tg-tour-item mb-30">
              <div className="tg-tour-thumb">
                <img src="/assets/img/tour/tour-1.jpg" alt="Maldives Tour" />
                <div className="tg-tour-badge">
                  <span>Featured</span>
                </div>
              </div>
              <div className="tg-tour-content">
                <div className="tg-tour-meta">
                  <span><i className="fa-regular fa-calendar"></i> 5 Days</span>
                  <span><i className="fa-regular fa-user"></i> 12 People</span>
                </div>
                <h4 className="tg-tour-title">
                  <a href="/tour-details-1">Maldives Luxury Resort</a>
                </h4>
                <div className="tg-tour-rating">
                  <div className="tg-tour-rating-star">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <span>(4.5)</span>
                </div>
                <div className="tg-tour-price">
                  <span className="tg-tour-price-from">From</span>
                  <span className="tg-tour-price-amount">$299</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="tg-tour-item mb-30">
              <div className="tg-tour-thumb">
                <img src="/assets/img/tour/tour-2.jpg" alt="Paris Tour" />
              </div>
              <div className="tg-tour-content">
                <div className="tg-tour-meta">
                  <span><i className="fa-regular fa-calendar"></i> 7 Days</span>
                  <span><i className="fa-regular fa-user"></i> 8 People</span>
                </div>
                <h4 className="tg-tour-title">
                  <a href="/tour-details-1">Paris City Explorer</a>
                </h4>
                <div className="tg-tour-rating">
                  <div className="tg-tour-rating-star">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <span>(4.8)</span>
                </div>
                <div className="tg-tour-price">
                  <span className="tg-tour-price-from">From</span>
                  <span className="tg-tour-price-amount">$599</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="tg-tour-item mb-30">
              <div className="tg-tour-thumb">
                <img src="/assets/img/tour/tour-3.jpg" alt="Tokyo Tour" />
              </div>
              <div className="tg-tour-content">
                <div className="tg-tour-meta">
                  <span><i className="fa-regular fa-calendar"></i> 6 Days</span>
                  <span><i className="fa-regular fa-user"></i> 10 People</span>
                </div>
                <h4 className="tg-tour-title">
                  <a href="/tour-details-1">Tokyo Adventure</a>
                </h4>
                <div className="tg-tour-rating">
                  <div className="tg-tour-rating-star">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                  </div>
                  <span>(4.2)</span>
                </div>
                <div className="tg-tour-price">
                  <span className="tg-tour-price-from">From</span>
                  <span className="tg-tour-price-amount">$799</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listing;