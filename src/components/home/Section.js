import React from 'react';
import gift from '../img/gift.png';
import '../../styles/section.scss';
import delivery from '../img/delivery.png';
import shoppingCart from '../img/shoppingCart.png';
import iconBook from '../img/iconBook.png';
import refresh from '../img/refresh.png';


const Section = () => {
  return (
    <div className="section ">
      <h1 className="title-services">           
Our services
      </h1>
      <p>We share thousands of books with others by reviewing them. Our goal is to put books in the hands of readers around the world. Enjoy the possible book buying experience with our reliable bookstore.
          </p>

      <div className="card-deck col-12 ">

        <div className="card-section col-12 col-md-4 col-lg-2">
            <img src={gift} className="icons" alt="gift"/>
            <p className="card-text">FREE GIFT PAPER</p>
        </div>


        <div className="card-section col-12 col-md-4 col-lg-2">
            <img src={delivery} className="icons" alt="delivery"/>
            <p className="card-text">SHIPPING</p>
        </div>

        <div className="card-section col-12 col-md-4 col-lg-2">
            <img src={shoppingCart} className="icons" alt="shopping cart"/>
            <p className="card-text">ONLINE ORDERS</p>
        </div>

        <div className="card-section col-12 col-md-4 col-lg-2">
            <img src={iconBook} className="icons" alt="Book"/>
            <p className="card-text">
BUY USED BOOKS</p>
        </div>

        <div className="card-section col-12 col-md-4 col-lg-2">        
            <img src={refresh} className="icons" alt="refresh"/>
            <p className="card-text">RETURNS / EXCHANGES</p>
        </div>

      </div>
    </div>
  );
}
export default Section;