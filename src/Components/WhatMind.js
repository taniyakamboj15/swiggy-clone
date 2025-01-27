import React from 'react'
import { IMAGE_URL } from '../constants/imageAdd';
const WhatMind = ({image}) => {
 return(
<div>
      <div className=' sm:w-40 sm:h-40 mx-5 flex justify-center items-center w-28 h-28 '>
        <img className='object-contain' src={IMAGE_URL + image}></img>
      </div>
    </div>
 )

}

export default WhatMind;