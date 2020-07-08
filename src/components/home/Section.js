import React from 'react';
import gift from '../img/gift.png';
import delivery from '../img/delivery.png';
import shoppingCart from '../img/shoppingCart.png';
import iconBook from '../img/iconBook.png';
import refresh from '../img/refresh.png';

const Section = () =>{
    return(
<div className="section">
          <h1>Nuestros servicios</h1>
          <p>
            Compartimos miles de libros con otros al revisarlos. Nuestro objetivo es poner los libros en manos de los lectores de todo el mundo. Disfrute de la posible experiencia de compra de libros con nuestra confiable librería.
          </p>
          <span >
            <img src={gift} className="icons" />

          </span>
          <span>
            <img src={delivery} className="icons" />
          </span>

          <span>
            <img src={shoppingCart} className="icons" />
          </span>
          <span>
            <img src={iconBook} className="icons" />
          </span>



          <img src={refresh} className="icons" />
        </div>
    )
}

export default Section;