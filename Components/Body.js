import React , {useEffect, useState} from 'react'
import RestCard from './RestCard'
import ShimmerUI from './Shimmer';
import { Link } from 'react-router-dom';
import useRestaurent from '../utils/useRestaurent';
import useOnlineStatus from '../utils/useOnlineStatus';

const Body = () => {
 const {rest,name} = useRestaurent();
 console.log(name);
  const [searchbtn,setsearchbtn]=useState("");
  const onlineStatus=useOnlineStatus();
  if(onlineStatus=== false)return(
    "LOOks like that you check your internet commection"
  )
 
  return rest.length === 0?<ShimmerUI />: (
    <div className='body'>
      <div className='search'>
        <input type="text" className='search-box' value={searchbtn} onChange={(e)=>{
          setsearchbtn(e.target.value)
        }}/>    
        <button onClick={()=>{
          const filtered=rest.filter((res)=>
res.info.name.toLowerCase().includes(searchbtn.toLowerCase())
          )
          setRest(filtered);
        }}>Search</button> 

         </div>
        <div className="first-btn" >
          <button className='fir-btn'onClick={()=>{const restlist = rest.filter((res)=>(
            res.info.avgRating > 4.5
          ))
          setRest(restlist)}}> top rated button</button>

        </div>
        <div className='rest-container'>
          {rest.map((res,index) => {
            return (
              <Link to={`/restaurants/${res.info.id}`}  key={index}>
<RestCard  rest={res} />
</Link>
            )
          })}
            


        </div>

    </div>
  )
}

export default Body