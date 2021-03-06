import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import "../../styles/books.scss";
import { Link } from 'react-router-dom';

const Books = ({data}) => {


  return (
    <div>      
      <div className="card-group">
      {data.map((book) => {
          return (
            <React.Fragment>            
        <div className="card cardBook col-12">
        <span className="title p-0 text-dark">{book.title}</span>
          <Link
          to={{
						pathname: '/Description',
            state: [{ data:book }]
					}}
          >
          <FontAwesomeIcon icon={faShoppingCart} 
          className="cartShopping" transform="shrink-6 left-4" size="3x" color="#fff" /> </Link>
          {/* <div className="card-body"> */}
            <img src={book.image} className="imgB" id="imgB" alt="book"/>
            {/* <h6 className="card-title">Leviatan</h6>
            <p className="card-text"><small class="text-muted">Thomas Hobbes</small></p> */}
          {/* </div> */}         
        </div> 
        </React.Fragment>
       )})}     
      </div>

    </div>
  );
}
export default Books;