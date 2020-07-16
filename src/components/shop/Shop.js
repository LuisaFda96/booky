import React, {useState} from 'react';
import  '../../styles/shop.scss';
import Table from '../shop/shop-table';
import Total from '../shop/shop-total';

function Shop(props){
    const cantidad = props.location.state
    console.log(props.location.state)
    const [shop, setShop]= useState()
    return(
        <div className=''>
            <div className="description-shop">
                <h2>Su carrito</h2>
            </div>
            <Table
            precio={cantidad[0].otros.price}
            name={cantidad[0].otros.title}>
            </Table>
            <div>
                <Total/>
            </div>
        </div>
    );
}

export default Shop;