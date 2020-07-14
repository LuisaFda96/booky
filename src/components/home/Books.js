import React from 'react';
import leviatan from '../../components/img/leviatan.jpg';
import loboEstepario from '../../components/img/loboEstepario.jpg';
import miLucha from '../../components/img/miLucha.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import "../../styles/books.scss";
import { Link } from 'react-router-dom';

const Books = ({data}) => {
// console.log()

  return (
    <div>      
      <div className="card-group">
      {data.map((book) => {
          return (
            <React.Fragment>            
        <div className="card cardBook col-12">
        <span className="title p-0">{book.title}</span>
          <Link
          to={{
						pathname: '/Description',
            state: [{ data:book }]
					}}
          >
          <FontAwesomeIcon icon={faShoppingCart} 
          className="cartShopping" transform="shrink-6 left-4" size="3x" color="#fff" /> </Link>
          {/* <div className="card-body"> */}
            <img src={book.image} className="imgB" />
            {/* <h6 className="card-title">Leviatan</h6>
            <p className="card-text"><small class="text-muted">Thomas Hobbes</small></p> */}
          {/* </div> */}         
        </div> 
        </React.Fragment>
       )})}     
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