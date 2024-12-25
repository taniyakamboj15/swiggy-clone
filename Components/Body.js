import React from 'react'
import RestCard from './RestCard'

const Body = () => {
  return (
    <div className='body'>
        <div className="search">search</div>
        <div className='rest-container'>
            <RestCard resName=" KFC" cuisine="chicken wings , burger" />
            <RestCard resName=" Dominos" cuisine="PIZZA burger"/>
            <RestCard resName=" pizza hut" cuisine="pizza, macroni , burger"/>
            <RestCard resName=" one 8" cuisine="indian cuisines"/>
            <RestCard resName=" burger singh" cuisine="burger , maggie"/>
            <RestCard resName=" Qbc" cuisine="Dal tadka, Veg Pulao"/>
            <RestCard resName=" DHABA" cuisine="North Indian cuisines"/>
            <RestCard resName=" RE: GENTA" cuisine="Italian & Indian cuisines "/>
        </div>

    </div>
  )
}

export default Body