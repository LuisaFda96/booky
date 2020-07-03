import React from 'react'
import '../../styles/Image.scss'

function Image({ src }){
  return <img src={src} alt="slide-img" className='image'></img>
}
export default Image;