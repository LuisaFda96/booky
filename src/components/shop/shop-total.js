import React from 'react';
import  '../../styles/shop-total.scss';
import { Link } from 'react-router-dom';

function Total(){
    return(
        <div className="shop-total">
            <h2 className="shop-title-total">Total Compra</h2>
            <table className="table table-total">
                <tbody>
                    <tr>
                        <td>Subtotal:</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Total:</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            <Link to = "/Checkout">
                <button className="shop-button">Realizar Pago</button>
            </Link>
        </div>
    );
}

export default Total;