import React from 'react'
import RestCard from './RestCard'
import { rest } from '../utils/rest'

const Body = () => {
 
  return (
    <div className='body'>
        <div className="first-btn" >
          <button className='fir-btn'onClick={()=>{console.log("button clicked")}}> top rated button</button>

        </div>
        <div className='rest-container'>
          {rest.map((res,index) => {
            return (
<RestCard resName=" KFC" rest={res} key={index} />
            )
          })}
            


        </div>

    </div>
  )
}

export default Body