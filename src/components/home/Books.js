import React from 'react';
import leviatan from '../../components/img/leviatan.jpg';
import loboEstepario from '../../components/img/loboEstepario.jpg';
import miLucha from '../../components/img/miLucha.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import '../../styles/books.scss';

const Books = () => {


  return (
    <div>
      <h1 className="title">Books Bestsellers</h1>
      <div className="card-group">

        <div className="card cardBook">
          <FontAwesomeIcon icon={faShoppingCart} className="cartShopping" transform="shrink-6 left-4" size="3x" color="#fff" />
          {/* <div className="card-body"> */}
          <img className="imageB" src={leviatan}/>
          <h6 className="card-title">Leviatan</h6>
            <p className="card-text"><small class="text-muted">Thomas Hobbes</small></p>
          {/* </div> */}
        </div>
      
      </div>

      <nav aria-label="...">
        <ul className="pagination pagination-sm">
          <li className="page-item active" aria-current="page">
            <span className="page-link">1
            <span className="sr-only">(current)</span>
            </span>
          </li>
          <li className="page-item"><a className="page-link" href="#">2</a></li>
          <li className="page-item"><a className="page-link" href="#">3</a></li>
        </ul>
      </nav>
      
    </div>
  );
}
export default Books;