import React from 'react'
import "../../styles/Navbar.scss";
// import logo from '../../components/img/logo.png';
import {Link} from 'react-router-dom'


// import '../../styles/slider.scss';



const Navbar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark  ">
        <a className="navbar-brand text-light" href="#" to='/'>
          Booky
      </a>
      {/* <image src={logo}/> */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon "></span>
        </button>
        <div
          className="collapse navbar-collapse " id="navbarSupportedContent">
          {/* className='nav'> */}
          <ul className="navbar-nav mr-auto ">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-light"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Home
            </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Action
              </a>
                <a className="dropdown-item" href="#">
                  Another action
              </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Something else here
              </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-light"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Description
            </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Action
              </a>
                <a className="dropdown-item" href="#">
                  Another action
              </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Something else here
              </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-light"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Shop
            </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Action
              </a>
                <a className="dropdown-item" href="#">
                  Another action
              </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Something else here
              </a>
              </div>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control btn-outline-secondary mr-sm-2 "
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0 text-light "
              id="buton"
              type="submit"
            >
              Search
          </button>
          </form>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
