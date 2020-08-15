import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <Link className="navbar-brand" to="/">
          Helth Clinic
        </Link>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Link
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/" tabIndex={-1}>
                Link
              </a>
            </li>
          </ul>
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
