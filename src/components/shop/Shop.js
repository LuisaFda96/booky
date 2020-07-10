import React from 'react';
// import { render } from 'node-sass';
import  '../../styles/shop.scss';
import dele from '../img/delete-icon.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from '../shop/shop-table';

function Shop(){
    return(<Table
    precio="20000" 
    name="Cien años de soledad">
    </Table>);
}

export default Shop;