const HeaderThree = () => {
  return (
    <header className="header-three">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="navbar">
              <div className="navbar-brand">
                <img src="/assets/img/logo/logo.png" alt="Tourex" />
              </div>
              <div className="navbar-nav">
                <a href="/" className="nav-link">Home</a>
                <a href="/about" className="nav-link">About</a>
                <a href="/contact" className="nav-link">Contact</a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderThree;