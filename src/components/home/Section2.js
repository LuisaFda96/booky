import React from 'react';
import '../../styles/section2.scss';
import eBook from '../../components/img/eBook.png';
import sale1 from '../../components/img/sale1.jpg';


const Section2 = () => {
    return (
        <div className="section-two col-lg-12 h-100 d-flex justify-content-center">
            <div  className="col-12 col-lg-5 d-flex flex-colum justify-content-center flex-column align-items-center "> 
            <h1 className="font-title text-center">  
Start a new series: up to 50% discount
            </h1>            
            <p className="paragraph">We have the most popular titles as well as classics. <br /> For our avid readers, join our book club and save 50%</p>    
            <img src={sale1} className="image-sale " />              
            </div>           
            <img src={eBook} className="image-book  m-3 col-12 col-lg-5 col-md-5 align-self-center" />
        </div>
    )
}
export default Section2;