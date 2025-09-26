interface BlogProps {
  style: boolean;
}

const Blog = ({ style }: BlogProps) => {
  return (
    <section className={`blog-section ${style ? 'blog-style-alt' : ''}`}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="blog-content text-center">
              <h2>Latest News & Articles</h2>
              <p>Stay updated with travel tips and destinations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;