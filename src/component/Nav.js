import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
export default function Nav() {
  return (
    <div>
      <nav className="shadow-sm p-3 mb-5  rounded navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          {/* <a className="navbar-brand" href="#link">
            E-React
          </a> */}
          <Link to="/" className="navbar-brand" href="#link">
            E-React
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#NavbarnavbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                {/* <a className="nav-link" href="#Navbar">
                  Cart <span className="sr-only">(current)</span>
                  <i className="fas fa-shopping-cart"></i>
                </a> */}
                <Link to="/cart" className="nav-link" href="#Navbar">
                  Cart <span className="sr-only">(current)</span>
                  <i className="fas fa-shopping-cart"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
