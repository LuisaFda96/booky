import React from 'react';
import gift from '../img/gift.png';
import '../../styles/section.scss';
import delivery from '../img/delivery.png';
import shoppingCart from '../img/shoppingCart.png';
import iconBook from '../img/iconBook.png';
import refresh from '../img/refresh.png';


const Section = () => {
  return (
    <div className="section">
      <h1 >
        <font style={{verticalAlign: "inherit"}}>
          <font style={{verticalAlign: "inherit"}}>
            Nuestros servicios
          </font>
        </font>
      </h1>
      <p>
        Compartimos miles de libros con otros al revisarlos. Nuestro objetivo es poner los libros en manos de los lectores de todo el mundo. Disfrute de la posible experiencia de compra de libros con nuestra confiable librería.
          </p>

      <div className="card-deck">

        <div className="cardSection ">
            <img src={gift} className="icons" />
            <p className="card-text">PAPEL DE REGALO GRATIS</p>
        </div>


        <div className="cardSection">
            <img src={delivery} className="icons" />
            <p className="card-text">ENVIO</p>
        </div>

        <div className="cardSection">
            <img src={shoppingCart} className="icons" />
            <p className="card-text">PEDIDOS EN LÍNEA</p>
        </div>

        <div className="cardSection">
            <img src={iconBook} className="icons" />
            <p className="card-text">COMPRA DE LIBROS USADOS</p>
        </div>

        <div className="cardSection">        
            <img src={refresh} className="icons" />
            <p className="card-text">DEVOLUCIONES / CAMBIOS</p>
        </div>

      </div>
    </div>
  );
}

export default Section;