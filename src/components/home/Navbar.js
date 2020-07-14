import React from "react";
import "../../styles/Navbar.scss";
// import logo from '../../components/img/logo.png';
import { Link } from "react-router-dom";

// import '../../styles/slider.scss';

const Navbar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <a class="navbar-brand" href="/">Booky</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Description">Description</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="/Shop" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Purchase
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="/Shop">Shop</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="/Checkout">Checkout</a>
              </div>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
