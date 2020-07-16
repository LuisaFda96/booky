import React, {useState} from 'react';
import  '../../styles/shop.scss';
import Table from '../shop/shop-table';
import Total from '../shop/shop-total';

function Shop(props){
    const cantidad = props.location.state
    console.log(props.location.state)
    // const [shop, setShop]= useState(
    // {    count : cantidad[1].count}
    // )
    return(
        <div className=''>
            <div className="checkout-title col-12 ">
                <h1>Shop</h1>
            </div>
            <Table
            precio={cantidad[0].otros.price}
            name={cantidad[0].otros.title}
            count={cantidad[1].count}>
            </Table>
            {/* <div>
                <Total
                 precio={cantidad[0].otros.price}
                 count={cantidad[1].count}/>
            </div> */}
        </div>
    );
}

export default Shop;