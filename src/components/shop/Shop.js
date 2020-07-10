import React from 'react';
import  '../../styles/shop.scss';
import Table from '../shop/shop-table';
import Total from '../shop/shop-total';

function Shop(){
    return(
        <React.Fragment>
            {/* <div className="description-shop">
                <h2>Your Cart</h2>
            </div> */}

            <Table
            precio="20000"
            name="Cien años de soledad">
            </Table>

            <div>
                <Total/>
            </div>

        </React.Fragment>
    );
}

export default Shop;