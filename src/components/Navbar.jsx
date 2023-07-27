import { NavLink } from "react-router-dom";
import mainLogo from "../images/final-logo.png";

function Navbar() {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <p className="navbar-brand">
              <img
                src={mainLogo}
                alt="Logo"
                style={{ width: "200px", height: "80px" }}
              />
            </p>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="nav nav-tabs collapse navbar-collapse "
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink to="./">
                    <span className="nav-link" aria-current="page">
                      Home
                    </span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/about">
                    <span className="nav-link">About</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/Jobs">
                    <span className="nav-link">Jobs</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/Testimonial">
                    <span className="nav-link">Testimonial</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <form className="d-flex" role="search">
                    <input
                      className="form-control me-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button className="btn btn-outline-primary" type="submit">
                      Search
                    </button>
                  </form>
                </li>
              </ul>
              <div className="container me-lg-0 col-lg-3">
                <div id="login-form" className="d-flex  ">
                  <h5>Login:</h5>
                  <input
                    className="form-control me-2 ms-2"
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Username"
                    aria-label="Username"
                  />
                  <input
                    className="form-control me-2"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    aria-label="Password"
                  />
                  <button
                    onClick="loginUser()"
                    className="btn btn-outline-primary"
                    type="submit"
                  >
                    SignUp
                  </button>
                </div>
                <span
                  className="d-flex justify-content-center mt-2 text-primary">
                  Create Account?
                </span>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
