import React from 'react';
import  '../../styles/shop-total.scss';

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

            <button className="shop-button">Realizar Pago</button>
        </div>
    );
}

export default Total;