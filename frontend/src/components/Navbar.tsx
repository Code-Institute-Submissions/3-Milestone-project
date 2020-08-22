import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Helth Clinic
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link" to="/">
              Welcome
              <span className="sr-only">(current)</span>
            </Link>
            <Link className="nav-link" to="/patient">
              Home
              <span className="sr-only">(current)</span>
            </Link>
            <Link className="nav-link" to="/help">
              Help
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

/**
 *  export css link and script of bootstrap at "public/index.htm" to apply theme and works troggle in the app.
 *
 *  export Navbar to your "App.tsx" inside the <routes> in order to render in all pages in the app.
 */
