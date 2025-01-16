import React , {useEffect, useState} from 'react'
import RestCard from './RestCard'
import ShimmerUI from './Shimmer';
import { Link } from 'react-router-dom';
import useRestaurent from '../utils/useRestaurent';
import useOnlineStatus from '../utils/useOnlineStatus';
import { InhancedCard } from './RestCard';

const Body = () => {
 const {rest,setRest} = useRestaurent();
  const [searchbtn,setsearchbtn]=useState("");
  const onlineStatus=useOnlineStatus();
  if(onlineStatus=== false)return(
    "LOOks like that you check your internet commection"
  )
  const Promoted = InhancedCard(RestCard);
 
  return rest.length === 0?<ShimmerUI />: (
    <div className= "px-44 flex flex-col justify-center items-center ">
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
        <div className='flex flex-wrap  gap-10 justify-center items-center '>
          {rest.map((res,index) => {
            return (
              <Link to={`/restaurants/${res.info.id}`}  key={index} className="link-reset">
                {res.info.isOpen ? <Promoted rest={res} /> : <RestCard  rest={res} /> }

</Link>
            )
          })}
       




        </div>

    </div>
  )
}

export default Body