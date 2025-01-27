import React , {useEffect, useState} from 'react'
import RestCard from './RestCard'
import ShimmerUI from './Shimmer';
import { Link } from 'react-router-dom';
import useRestaurent from '../utils/useRestaurent';
import useOnlineStatus from '../utils/useOnlineStatus';
import { InhancedCard } from './RestCard';
import WhatMind from './WhatMind';
const Body = () => {
 const {rest,setRest,title,imageList,topHeader,topRest,onlineFood,onlineRest} = useRestaurent();
  const [searchbtn,setsearchbtn]=useState("");
  const onlineStatus=useOnlineStatus();
  if(onlineStatus=== false)return(
    "LOOks like that you check your internet commection"
  )
  const Promoted = InhancedCard(RestCard);
 
  return rest?.length === 0?<ShimmerUI />: (
    <div className= " flex flex-col mx-auto w-3/4">
     <h1 className='font-bold text-[25px] pt-7 ml-4'>{title}</h1>
      <div className='h-72 border-b border-slate-300 flex overflow-x-scroll  items-center scroll-smooth no-scrollbar '>
        {
          imageList.map((arg, index) => (
            <WhatMind key={index} image={arg.imageId} />
          ))}
      </div>
<div className=''>
  <h1 className='font-bold text-[25px] pt-7 ml-4'>{topHeader}</h1>
  <div className='border-b border-slate-300 flex overflow-x-scroll  items-center scroll-smooth no-scrollbar gap-5 pt-9'>
 
    {topRest.map((rest,index)=>  <Link to={`/restaurants/${rest.info.id}`}  key={index} className="link-reset"> <RestCard key={index} rest={rest}></RestCard></Link>)} 
  </div>


</div>

    <div className='flex'>
      <div className='m-4 p-4' >
        <input type="text" className='border-2 border-solid border-black' value={searchbtn} onChange={(e)=>{
          setsearchbtn(e.target.value)
        }}/>    
        <button className='px-4 m-4 py-2 bg-green-100 rounded-lg' onClick={()=>{
          const filtered=rest.filter((res)=>
res.info.name.toLowerCase().includes(searchbtn.toLowerCase())
          )
          setRest(filtered);
        }}>Search</button> 

         </div>
        <div className="  p-4 m-4 flex items-center" >
          <button className='flex px-4 py-2 bg-green-100 border-2  border-black'onClick={()=>{const restlist = rest.filter((res)=>(
            res.info.avgRating > 4.5
          ))
          setRest(restlist)}}> top rated button</button>

        </div></div>
        <div>
          <h1 className='font-bold text-[25px]'>{onlineFood}</h1>
        <div className='flex flex-wrap  gap-10 justify-between items-center  pt-10'>
          {rest.map((res,index) => {
            return (
              <Link to={`/restaurants/${res.info.id}`}  key={index} className="link-reset">
                {res.info.isOpen ? <Promoted rest={res} /> : <RestCard  rest={res} /> } 

</Link>
            )
          })}
    


        </div>

    </div>
    </div>
  )
}

export default Body