import React, { useState } from "react";
import '../../styles/Info.scss'

const Info = ({ name, price, description }) => {
  return (
    <div className='m-4 info '>
      <h2 className='mb-2'>{name}</h2>
      <p className='price pb-4 mb-4'>${price}</p>
      <p>{description}</p>
    </div>
  );
};

export default Info;
