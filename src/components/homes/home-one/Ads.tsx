const Ads = () => {
  return (
    <div className="tg-ads-area" style={{ backgroundImage: 'url(/assets/img/bg/ads-bg.jpg)' }}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="tg-ads-content text-center">
              <h2 className="tg-ads-title">
                Get 25% Off Your First Booking!
              </h2>
              <p className="tg-ads-text">
                Book your dream vacation today and save big on your first trip with us
              </p>
              <div className="tg-ads-btn">
                <a href="/tour-grid-1" className="tg-btn">
                  Book Now <i className="fa-regular fa-arrow-right-long"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ads;