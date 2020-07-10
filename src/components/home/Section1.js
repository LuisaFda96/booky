import React from 'react';
import '../../styles/section1.scss';
import clients from '../img/clients.jpg';

const Section1 = () => {
    return (
        <div className="popular">
            <image src={clients}/>
            <h1 className="title">Autores y series populares</h1>
            <p>Somos una tienda en línea que vende libros, nuestra tienda tiene más de 500 mil libros y artículos digitales geniales.<br/> Somos
            un lugar perfecto para quienes buscan los mejores libros, audiolibros, libros de texto y videos.</p>
        </div>
    )
}
export default Section1;