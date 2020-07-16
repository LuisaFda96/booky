import React, { useState } from "react";
import '../../styles/Info.scss'

const Info = ({ title, price, description }) => {
  return (
    <div className='m-4 info '>
      <h2 className='mb-2'>{title}</h2>
      <p className='price pb-4 mb-4'>${price}</p>
      <p className="text-justify">{description}</p>
    </div>
  );
};

export default Info;
