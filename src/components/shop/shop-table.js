import React, {useState} from 'react';
import '../../styles/shop-table.scss';

function Table({precio, name}) {
    const [count, setCount] = useState(1);

    const handleClickLess = () => {
        if (count > 0) {
            return (setCount(count - 1))
        }
    }

    const handleClickMore = () => {
        setCount(count + 1)
    }

    return (
        <div className="shop-buy">
            <div className="shop-titles">
                <span></span>
                <span></span>
                <span>Producto:</span>
                <span>Precio:</span>
                <span>Cantidad:</span>
                <span>Subtotal</span>
            </div>
            <div className="shop-items">
                <span><button className="button-delete"><i class="fas fa-times"></i></button></span>
                <span></span>
                <span>{name}</span>
                <span>{precio}</span>
                <span>
                    <div className='d-flex shop-count'>
                        <p className="col-4 mr-3 align-self-center">{count}</p>
                            <div className='d-flex flex-column'>
                                <button onClick={handleClickMore} className='col-6 boton shop-count-button'><i class="fas fa-angle-up button-increment-decrement"></i></button>
                                <button onClick={handleClickLess} className='col-6 boton shop-count-button'><i class="fas fa-angle-down button-increment-decrement"></i></button>
                            </div>
                    </div>
                </span>
                <span>{precio * count}</span>
            </div>
        </div>
    );
}

export default Table;