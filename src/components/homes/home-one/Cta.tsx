const Cta = () => {
  return (
    <div className="tg-cta-area" style={{ backgroundImage: 'url(/assets/img/bg/cta-bg.jpg)' }}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="tg-cta-content text-center">
              <h2 className="tg-cta-title text-white">
                Ready for Your Next Adventure?
              </h2>
              <p className="tg-cta-text text-white mb-35">
                Join thousands of satisfied travelers and book your dream vacation today
              </p>
              <div className="tg-cta-btn">
                <a href="/contact" className="tg-btn">
                  Get Started <i className="fa-regular fa-arrow-right-long"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;