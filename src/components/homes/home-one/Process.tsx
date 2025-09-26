const Process = () => {
  return (
    <div className="tg-process-area pt-100 pb-70">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="tg-section-title text-center mb-60">
              <span className="tg-section-subtitle">How It Works</span>
              <h2 className="tg-section-title-main">Easy Booking Process</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-3 col-lg-6 col-md-6">
            <div className="tg-process-item text-center mb-30">
              <div className="tg-process-icon">
                <i className="fa-regular fa-magnifying-glass"></i>
              </div>
              <div className="tg-process-content">
                <h4 className="tg-process-title">Search Destination</h4>
                <p>Browse through our extensive list of amazing destinations</p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-6">
            <div className="tg-process-item text-center mb-30">
              <div className="tg-process-icon">
                <i className="fa-regular fa-calendar-check"></i>
              </div>
              <div className="tg-process-content">
                <h4 className="tg-process-title">Select Date</h4>
                <p>Choose your preferred travel dates and duration</p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-6">
            <div className="tg-process-item text-center mb-30">
              <div className="tg-process-icon">
                <i className="fa-regular fa-credit-card"></i>
              </div>
              <div className="tg-process-content">
                <h4 className="tg-process-title">Make Payment</h4>
                <p>Secure payment with multiple payment options available</p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-6">
            <div className="tg-process-item text-center mb-30">
              <div className="tg-process-icon">
                <i className="fa-regular fa-plane"></i>
              </div>
              <div className="tg-process-content">
                <h4 className="tg-process-title">Enjoy Trip</h4>
                <p>Pack your bags and enjoy your amazing travel experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;