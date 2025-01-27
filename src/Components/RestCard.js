import React from 'react'
import {IMAGE_URL} from '../constants/imageAdd';

const RestCard = ({rest}) => {

 
  const {name,cuisines,
    cloudinaryImageId,avgRatingString,locality,sla
    } = rest.info;
    
  console.log(rest)
  return (
    <div className='h-80 w-64 flex-shrink-0' >
        <img className='rounded-2xl h-3/5 object-cover w-64 ' alt="gvgv" src={IMAGE_URL  + cloudinaryImageId} ></img>
        <h1 className='font-bold text-xl'>{name}</h1>
        <p className='font-bold '>{avgRatingString} : {sla.slaString}</p>
        <p className='font-semibold text-gray-400 truncate'>{cuisines.join(",")}</p>
        <p className='font-semibold text-gray-400 truncate'>{locality}</p>
        
    </div>
  )
}

export const InhancedCard =(RestCard) =>{
  return (props) => {
    return(
<div className='hover:scale-90'>
  <label className='absolute bg-black text-white p-1 m-2 rounded-md'>promoted</label>
  <RestCard  {...props} />
</div>
    )
  }

}


export default RestCard