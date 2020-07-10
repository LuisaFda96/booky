import React, { useState } from "react";
import i1 from "../img/img1.jpg";
import Image from "./Image";
import Info from "./Info";
import Options from "./Options";
import "../../styles/Description.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faSortUp } from '@fortawesome/free-solid-svg-icons'


const Description = () => {
  const [count, setCount] = useState(1);

  const handleClickLess = () => {
    if(count>0){
      return(
        setCount(count-1))}
  }

  const handleClickMore = () => {
        setCount(count+1)
  }
  return (
    <div className="container-fluid mb-2  contenedor">
      <Image src={i1}></Image>
      <div className='col-md-11 col-lg-5'>
      <Info
        name="Garden Design and Landscaping"
        price="15.45"
        description="lorem ipsum lajsdflajsldfjalñsjdflajsdflajsfdl"
      ></Info>
      <section className="d-flex ml-4 ">
        <div className='d-flex'>
        <p className="col-4 mr-3 align-self-center" >{count}</p>
        <div className='d-flex flex-column'>
          <button 
          onClick={handleClickMore}
          className='col-6 boton border-bottom d-flex justify-content-center align-items-center '>
                  <FontAwesomeIcon 
                  icon={faSortUp}
                  className='text-light'
                  > </FontAwesomeIcon>
          </button>
          <button
          onClick={handleClickLess}
          className='col-6 boton d-flex justify-content-center align-items-center '
              >
                <FontAwesomeIcon
                 icon={faCaretDown}
                 className='text-light'> </FontAwesomeIcon>
          </button>
        </div>
        </div>
        <button className="button col-6 text-light p-1">Add to cart</button>
      </section>
      </div>
    </div>
  );
};

export default Description;
