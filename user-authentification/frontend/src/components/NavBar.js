import { NavLink, useNavigate } from "react-router-dom";
import React from "react";

function Navigation() {
  const navigate = useNavigate();

  const logout = (e) => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink exact="true" to="/" className="navbar-brand">
          Mon application
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink exact="true" to="/" className="nav-link">
                Accueil
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/feed" className="nav-link">
                Feed
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/profile" className="nav-link">
                Profil
              </NavLink>
            </li>
            {!localStorage.getItem("token") ? (
              <li className="nav-item">
                <NavLink to="/login" className="nav-link">
                  login
                </NavLink>
              </li>
            ) : (
              <li className="nav-item">
                <a
                  onClick={() => logout(navigate)}
                  className="nav-link cursor-pointer"
                >
                  log out
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
