import React from 'react';

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-dark bg-primary">
        <a href="/" className="navbar-brand">Pixel Drive</a>
        <button className="navbar-toggler" type="button"
          data-toggle="collapse"
          data-target="#navmenu1"
          aria-controls="navmenu1"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navmenu1">
          <div className="navbar-nav">
            <a className="nav-item nav-link" href="#">Contact</a>
          </div>
        </div>
      </nav>
    </>

  )
};

export default Header;
