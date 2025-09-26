const Blog = () => {
  return (
    <div className="tg-blog-area pt-100 pb-70">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="tg-section-title text-center mb-60">
              <span className="tg-section-subtitle">Latest News</span>
              <h2 className="tg-section-title-main">Travel Blog & Tips</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4 col-lg-6">
            <div className="tg-blog-item mb-30">
              <div className="tg-blog-thumb">
                <a href="/blog-details">
                  <img src="/assets/img/blog/blog-1.jpg" alt="Travel Tips" />
                </a>
              </div>
              <div className="tg-blog-content">
                <div className="tg-blog-meta">
                  <span><i className="fa-regular fa-calendar"></i> March 15, 2024</span>
                  <span><i className="fa-regular fa-user"></i> By Admin</span>
                </div>
                <h4 className="tg-blog-title">
                  <a href="/blog-details">10 Essential Travel Tips for First-Time Travelers</a>
                </h4>
                <p>Discover the must-know tips that will make your first travel experience unforgettable...</p>
                <div className="tg-blog-btn">
                  <a href="/blog-details">Read More <i className="fa-regular fa-arrow-right-long"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6">
            <div className="tg-blog-item mb-30">
              <div className="tg-blog-thumb">
                <a href="/blog-details">
                  <img src="/assets/img/blog/blog-2.jpg" alt="Best Destinations" />
                </a>
              </div>
              <div className="tg-blog-content">
                <div className="tg-blog-meta">
                  <span><i className="fa-regular fa-calendar"></i> March 12, 2024</span>
                  <span><i className="fa-regular fa-user"></i> By Admin</span>
                </div>
                <h4 className="tg-blog-title">
                  <a href="/blog-details">Best Destinations to Visit in 2024</a>
                </h4>
                <p>Explore the top trending destinations that should be on your travel list this year...</p>
                <div className="tg-blog-btn">
                  <a href="/blog-details">Read More <i className="fa-regular fa-arrow-right-long"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6">
            <div className="tg-blog-item mb-30">
              <div className="tg-blog-thumb">
                <a href="/blog-details">
                  <img src="/assets/img/blog/blog-3.jpg" alt="Budget Travel" />
                </a>
              </div>
              <div className="tg-blog-content">
                <div className="tg-blog-meta">
                  <span><i className="fa-regular fa-calendar"></i> March 10, 2024</span>
                  <span><i className="fa-regular fa-user"></i> By Admin</span>
                </div>
                <h4 className="tg-blog-title">
                  <a href="/blog-details">How to Travel on a Budget Without Compromising</a>
                </h4>
                <p>Learn the secrets of budget travel and how to save money while having amazing experiences...</p>
                <div className="tg-blog-btn">
                  <a href="/blog-details">Read More <i className="fa-regular fa-arrow-right-long"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;