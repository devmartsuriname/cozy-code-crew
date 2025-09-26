import { Link } from "react-router-dom";

const ErrorArea = () => {
  return (
    <div className="tg-error-spacing">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 offset-xl-3">
            <div className="tg-error-content text-center">
              <h2>404</h2>
              <p>Sorry, the page you are looking for could not be found.</p>
              <div className="tg-error-btn">
                <Link to="/" className="tg-btn">
                  <i className="fa-regular fa-arrow-left-long"></i> Back To Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorArea;