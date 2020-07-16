import React, {useState} from 'react';
import '../../styles/shop-table.scss';
import {Link} from 'react-router-dom'

function Table({precio, name, count}) {
    const [counter, setCount] = useState(count);

    const handleClickLess = () => {
        if (counter > 0) {
            return (setCount(counter - 1))
        }
    }

    const handleClickMore = () => {
        setCount(counter + 1)
    }

    return (
        <React.Fragment>
        <div className="shop-buy col-12 ml-2 pl-0 ">
            <div className="shop-titles">
                {/* <span></span> */}
                <span>Product</span>
                <span>Price</span>
                <span>Quantity</span>
                <span>Subtotal</span>
            </div>
            <div className="shop-items">
                {/* <span><button className="button-delete"><i class="fas fa-times"></i></button></span> */}
                <span>{name}</span>
                <span>{precio}</span>
                <span>
                    <div className='d-flex shop-count'>
                        <p className="col-4 mr-3 align-self-center">{counter}</p>
                            <div className='d-flex flex-column'>
                                <button onClick={handleClickMore} className='col-6 boton shop-count-button'><i class="fas fa-angle-up button-increment-decrement"></i></button>
                                <button onClick={handleClickLess} className='col-6 boton shop-count-button'><i class="fas fa-angle-down button-increment-decrement"></i></button>
                            </div>
                    </div>
                </span>
                <span>{precio * counter}</span>
            </div>          
        </div>
          <div className="shop-total">
          <h2 className="shop-title-total">Total Buy</h2>
          <table className="table table-total">
              <tbody>
                  <tr>
                      <td>Subtotal:</td>
                      <td></td>
                  </tr>
                  <tr>
                      <td>Total:{precio*counter}</td>
                      <td></td>
                  </tr>
              </tbody>
          </table>
          <Link to = "/Checkout">
              <button className="shop-button">Pay</button>
          </Link>
      </div>
      </React.Fragment>
    );
}

export default Table;