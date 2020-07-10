import React from 'react';
import leviatan from '../../components/img/leviatan.jpg';
import loboEstepario from '../../components/img/loboEstepario.jpg';
import miLucha from '../../components/img/miLucha.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import "../../styles/books.scss";
import { Link } from 'react-router-dom';

const Books = ({title, image, description,price }) => {
// console.log()

  return (
    <div>
      <h1 className="title">{title}</h1>
      <div className="card-group">
        <div className="card">
          <Link
          to={{
						pathname: '/Description',
            state: [{
              description: description,
              price: price,
              image: image,
              title: title,
           }]
					}}>
          <FontAwesomeIcon icon={faShoppingCart} 
          className="cartShopping" transform="shrink-6 left-4" size="3x" color="#fff" /> </Link>
          {/* <div className="card-body"> */}
            <img src={image} className="imgB" />
            {/* <h6 className="card-title">Leviatan</h6>
            <p className="card-text"><small class="text-muted">Thomas Hobbes</small></p> */}
          {/* </div> */}         
        </div>

        {/* <div className="card">
          <img src={loboEstepario} className="imgB" />
          <FontAwesomeIcon icon={faShoppingCart} className="cartShopping" transform="shrink-6 left-4" size="3x" color="#fff" />

        </div>

        <div className="card">
          <img src={miLucha} className="imgB" />
          <FontAwesomeIcon icon={faShoppingCart} className="cartShopping" transform="shrink-6 left-4" size="3x" color="#fff" />

        </div> */}
      </div>
    </div>
  );
}
export default Books;