import BannerFormOne from "../../common/banner-form/BannerFormOne";

const Banner = () => {
  return (
    <div className="tg-hero-area tg-hero-bg p-relative fix" 
         style={{ backgroundImage: 'url(/assets/img/hero/hero-bg.jpg)' }}>
      <div className="tg-hero-top-shadow"></div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="tg-hero-content text-center">
              <div className="tg-hero-badge mb-15">
                <span>* This Offer Valid Till 22 August</span>
              </div>
              <h1 className="tg-hero-title mb-15">
                Maldives island
              </h1>
              <p className="tg-hero-text mb-30">
                When An Unknown Printer Took Ar Galley Offer Type Area Year Andday Make Specimen Book
              </p>
              <div className="tg-hero-price mb-35">
                <span className="tg-hero-price-text">Booking Start From</span>
                <span className="tg-hero-price-amount">
                  <sup>$</sup>299<sub>/night</sub>
                </span>
              </div>
              <div className="tg-hero-btn mb-65">
                <button className="tg-btn">
                  TAKE A TOUR <i className="fa-regular fa-arrow-right-long"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="tg-hero-form">
              <BannerFormOne />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;