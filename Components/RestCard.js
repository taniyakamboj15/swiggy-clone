import React from 'react'
import IMAGE_URL from '../constants/imageAdd';

const RestCard = ({rest}) => {
  console.log(rest);
 
  const {name,cuisines,
    cloudinaryImageId
    } = rest.info;
    

  return (
    <div className='rest-card'>
        <img alt="gvgv" src={IMAGE_URL  + cloudinaryImageId} ></img>
        <h1>{name}</h1>
        <p>{cuisines.join(",")}</p>
        <p>4.5</p>
        <p>450rs</p>
    </div>
  )
}

export default RestCard