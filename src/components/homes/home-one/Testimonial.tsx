const Testimonial = () => {
  return (
    <div className="tg-testimonial-area pt-100 pb-100" style={{ backgroundImage: 'url(/assets/img/bg/testimonial-bg.jpg)' }}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="tg-section-title text-center mb-60">
              <span className="tg-section-subtitle text-white">Testimonials</span>
              <h2 className="tg-section-title-main text-white">What Our Clients Say</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4 col-lg-6">
            <div className="tg-testimonial-item mb-30">
              <div className="tg-testimonial-content">
                <div className="tg-testimonial-rating mb-15">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <p className="mb-25">
                  "Amazing experience! The tour was well organized and the guide was very knowledgeable. 
                  I would definitely recommend this to anyone looking for a great travel experience."
                </p>
                <div className="tg-testimonial-author">
                  <div className="tg-testimonial-author-thumb">
                    <img src="/assets/img/testimonial/author-1.jpg" alt="John Doe" />
                  </div>
                  <div className="tg-testimonial-author-info">
                    <h5>John Doe</h5>
                    <span>Travel Enthusiast</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6">
            <div className="tg-testimonial-item mb-30">
              <div className="tg-testimonial-content">
                <div className="tg-testimonial-rating mb-15">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <p className="mb-25">
                  "Outstanding service from start to finish. The attention to detail and customer 
                  service was exceptional. Will definitely book again!"
                </p>
                <div className="tg-testimonial-author">
                  <div className="tg-testimonial-author-thumb">
                    <img src="/assets/img/testimonial/author-2.jpg" alt="Sarah Smith" />
                  </div>
                  <div className="tg-testimonial-author-info">
                    <h5>Sarah Smith</h5>
                    <span>Adventure Seeker</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6">
            <div className="tg-testimonial-item mb-30">
              <div className="tg-testimonial-content">
                <div className="tg-testimonial-rating mb-15">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                </div>
                <p className="mb-25">
                  "Great value for money and wonderful memories created. The itinerary was perfect 
                  and everything went smoothly as planned."
                </p>
                <div className="tg-testimonial-author">
                  <div className="tg-testimonial-author-thumb">
                    <img src="/assets/img/testimonial/author-3.jpg" alt="Mike Johnson" />
                  </div>
                  <div className="tg-testimonial-author-info">
                    <h5>Mike Johnson</h5>
                    <span>Family Traveler</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;