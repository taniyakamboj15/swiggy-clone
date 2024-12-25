import React from 'react'

const RestCard = ({resName,cuisine}) => {
    

  return (
    <div className='rest-card'>
        <img alt="gvgv" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/f63a6861-4706-4534-8fc4-e95fec2e0ab8_16865.jpg" ></img>
        <h1>{resName}</h1>
        <p>{cuisine}</p>
        <p>4.5</p>
        <p>450rs</p>
    </div>
  )
}

export default RestCard