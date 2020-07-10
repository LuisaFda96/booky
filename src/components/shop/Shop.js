import React from 'react';
import  '../../styles/shop.scss';
import Table from '../shop/shop-table';
import Total from '../shop/shop-total';

function Shop(){
    return(
        <div className=''>
            <div className="description-shop">
                <h2>Su carrito</h2>
            </div>
            <Table
            precio="10.40"
            name="Garden Design and Landscaping">
            </Table>
            <div>
                <Total/>
            </div>
        </div>
    );
}

export default Shop;