const Location = () => {
  return (
    <div className="tg-location-area pt-100 pb-70">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="tg-section-title text-center mb-60">
              <h2 className="tg-section-title-main">Popular Destinations</h2>
              <p>Discover the most loved destinations by our travelers</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="tg-destination-item mb-30">
              <div className="tg-destination-thumb">
                <img src="/assets/img/destination/destination-1.jpg" alt="Paris" />
              </div>
              <div className="tg-destination-content">
                <div className="tg-destination-meta">
                  <a href="#">15 Tours</a>
                </div>
                <h4 className="tg-destination-title">
                  <a href="/tour-grid-1">Paris, France</a>
                </h4>
                <div className="tg-destination-tag">
                  <span>From $299</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="tg-destination-item mb-30">
              <div className="tg-destination-thumb">
                <img src="/assets/img/destination/destination-2.jpg" alt="London" />
              </div>
              <div className="tg-destination-content">
                <div className="tg-destination-meta">
                  <a href="#">12 Tours</a>
                </div>
                <h4 className="tg-destination-title">
                  <a href="/tour-grid-1">London, UK</a>
                </h4>
                <div className="tg-destination-tag">
                  <span>From $399</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="tg-destination-item mb-30">
              <div className="tg-destination-thumb">
                <img src="/assets/img/destination/destination-3.jpg" alt="Tokyo" />
              </div>
              <div className="tg-destination-content">
                <div className="tg-destination-meta">
                  <a href="#">18 Tours</a>
                </div>
                <h4 className="tg-destination-title">
                  <a href="/tour-grid-1">Tokyo, Japan</a>
                </h4>
                <div className="tg-destination-tag">
                  <span>From $499</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="tg-destination-item mb-30">
              <div className="tg-destination-thumb">
                <img src="/assets/img/destination/destination-4.jpg" alt="New York" />
              </div>
              <div className="tg-destination-content">
                <div className="tg-destination-meta">
                  <a href="#">20 Tours</a>
                </div>
                <h4 className="tg-destination-title">
                  <a href="/tour-grid-1">New York, USA</a>
                </h4>
                <div className="tg-destination-tag">
                  <span>From $599</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;