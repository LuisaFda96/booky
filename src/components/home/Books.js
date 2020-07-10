import React from 'react';
import leviatan from '../../components/img/leviatan.jpg';
import loboEstepario from '../../components/img/loboEstepario.jpg';
import miLucha from '../../components/img/miLucha.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import "../../styles/books.scss";

const Books = () => {


  return (
    <div>
      <h1 className="title">Books Bestsellers</h1>
      <div className="card-group">

        <div className="card">
          <FontAwesomeIcon icon={faShoppingCart} className="cartShopping" transform="shrink-6 left-4" size="3x" color="#fff" />
          {/* <div className="card-body"> */}
            <img src={leviatan} className="imgB" />
            {/* <h6 className="card-title">Leviatan</h6>
            <p className="card-text"><small class="text-muted">Thomas Hobbes</small></p> */}
          {/* </div> */}
        </div>


        <div className="card">
          <img src={loboEstepario} className="imgB" />
          <FontAwesomeIcon icon={faShoppingCart} className="cartShopping" transform="shrink-6 left-4" size="3x" color="#fff" />

        </div>

        <div className="card">
          <img src={miLucha} className="imgB" />
          <FontAwesomeIcon icon={faShoppingCart} className="cartShopping" transform="shrink-6 left-4" size="3x" color="#fff" />

        </div>

      </div>
    </div>
  );
}
export default Books;