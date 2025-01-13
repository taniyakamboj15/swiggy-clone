import React , {useEffect, useState} from 'react'
import RestCard from './RestCard'
import ShimmerUI from './Shimmer';
import { Link } from 'react-router-dom';

const Body = () => {
  const [rest,setRest] = useState([]);
  const [searchbtn,setsearchbtn]=useState("");
  console.log("body rendered");
  useEffect(()=>{
   fetchData();
  },[])
  const fetchData = async () => {
   
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6139298&lng=77.2088282&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
 const data1 = await data.json();
 const restaurent = data1.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
 setRest(restaurent);
  }
 
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