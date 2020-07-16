import React from 'react';
import '../../styles/section1.scss';
import clients from '../img/clients.jpg';

const Section1 = () => {
    return (
        <div className="popular">
            <image src={clients}/>
            <h1 className="title-section1">Popular authors and series</h1>
            <p className="paragraph1">We are an online store that sells books, our store has more than 500 thousand great digital books and items.<br/>We are a perfect place for those looking for the best books, audiobooks, textbooks, and videos.</p>
        </div>
    )
}
export default Section1;