import React from 'react'
import '../../styles/Image.scss'

function Image({ src }){
  return (
  <div className='fondo_imagen col-10  mt-5 mb-5 p-4 d-flex col-md-11 col-lg-6 justify-content-center'>
    		<div className='floating-icon'>
						<span>sale</span>
					</div>
    <img src={src} alt="slide-img" className='imagen col-12 col-md-9 col-lg-12 p-0'
   ></img>
    </div>
  )
}
export default Image;