import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaBook } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <FaBook className="me-2" />
          SimplyTask
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="ms-auto d-flex align-items-center gap-3">
            <a className="nav-link active" aria-current="page" href="#">Inicio</a>
            <a href="#" className="btn btn-outline-dark">Registrarse</a>
            <a href="#" className="btn btn-dark">Iniciar sesión</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
