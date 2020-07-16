import React from 'react';
import '../../styles/section2.scss';
import eBook from '../../components/img/eBook.png';
import sale1 from '../../components/img/sale1.jpg';


const Section2 = () => {
    return (
        <div className="section-two col-12">
            <div > 
            <h1 className="font-title">
                Comience una nueva serie: <br /> hasta un 50% de descuento
            </h1>
            </div>
            <p className="paragraph">Tenemos los títulos más populares, así como clásicos. <br />Para nuestros ávidos lectores,<br /> únase a nuestro club de lectura y ahorre 50%</p>
            <img src={eBook} className="image-book" />
            <img src={sale1} className="image-sale" />
        </div>
    )
}
export default Section2;