import React, { useState } from 'react'
import '../../styles/slider.scss'
import ImgComp from './ImgComp'
// import i1 from '../img/img1.jpg'
import i2 from '../img/slide2.jpeg'
import i3 from '../img/booky.jpeg'
import i4 from '../img/slide3.jpeg'

function Slider() {
    const [x, setX] = useState(0);
    let sliderArr = [
        // <ImgComp src={i1}/>,
        <ImgComp src={i2} />,
        <ImgComp src={i3} />,
        <ImgComp src={i4} />,
    ];
    const goLeft = () => {
        x === 0 ? setX(- 100 * (sliderArr.length - 1)) : setX(x + 100);
    };
    const goRight = () => {
        x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
    };

    return (
       
            <div className="slider ">
                {sliderArr.map((item, index) => {
                    return (
                        <div key={index} className="slide" style={{ transform: `translateX(${x}%)` }}>{item}</div>
                    )
                })}
                <button id="goLeft" onClick={goLeft}>
                    <i className="fas fa-chevron-left"></i>
                </button>
                <button id="goRight" onClick={goRight}>
                    <i className="fas fa-chevron-right"></i>
                </button>
            </div>
    )
}
export default Slider;