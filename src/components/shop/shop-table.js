import React, {useState} from 'react';
import  '../../styles/shop-table.scss';
// import dele from '../img/delete-icon.png';

function Table({precio, name}){
    const [count, setCount] = useState(1);

    const handleClickLess = () => {
        if(count>0){
        return(
            setCount(count-1))}
    }

    const handleClickMore = () => {
            setCount(count+1)
    }

    return(
        <div className="parr container-fluid">
            <table class="table">
                {/* <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead> */}
                <tbody>
                <tr>
                        <td>Producto:</td>
                        <td>{name}</td>
                    </tr>
                    <tr>
                        <td>Precio:</td>
                        <td>{precio}</td>
                    </tr>
                    <tr>
                        <td>Cantidad:</td>
                        <td>
                        <div className='d-flex'>
                            <p className="col-4 mr-3 align-self-center" >{count}</p>
                            <div className='d-flex flex-column'>
                                <button
                                onClick={handleClickMore}
                                className='col-6 boton border-bottom'>
                                </button>
                                <button
                                onClick={handleClickLess}
                                className='col-6 boton'>
                                </button>
                            </div>
                        </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Subtotal:</td>
                        <td>{precio*count}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Table;