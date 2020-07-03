import React, { useState } from 'react'
import i1 from '../img/img1.jpg'
import Image from './Image'
import Container from '@material-ui/core/Container';


const Description = () =>{
  return(
    <React.Fragment>
    <Container className='description'>
    <Image
    src={i1}
    ></Image>
    <h1>Name Book</h1>
    <p>Price</p>
    <p>Description</p>
    <section>
      <input></input>
      <button>Add to cart</button>
    </section>
    </Container>
    </React.Fragment>
  )
}

export default Description