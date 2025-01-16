import { useEffect, useState } from "react";
import { RESMENU } from "../utils/constant";
import { useParams } from "react-router-dom";
import ShimmerUI from "./Shimmer";
import Restaurantcategories from "./Restaurantcategories";
 
const Restaurants=()=>{
    const {resId} = useParams();
    const [rest , setRest] = useState();
    const [tab,setTab] = useState();
    const [restinfo,setRestInfo] = useState();
    const [resmenu, setResMenu] = useState();
    useEffect(()=>{

        fetchdata();
    },[])
    const fetchdata = async()=> {
        const rest = await fetch(RESMENU + resId);
        const data1 = await rest.json();
        console.log("hello fro restrauant info",data1);
        setRest(data1?.data?.cards[0]?.card?.card?.text);
        setTab(data1?.data?.cards[1]?.card?.card?.tabs);
        setRestInfo(data1?.data?.cards[2]?.card?.card?.info);
        const itemcategory = data1?.data?.cards[4]?.groupedCard?.cardGroupMap?. REGULAR?.cards.filter(c=>c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
       setResMenu(itemcategory);
       console.log("data1",data1);

    }
    
  
 
  if(!rest) return <ShimmerUI />;



    return(
        <div className="flex flex-col justify-center items-center">
            <h1>{rest}</h1>
            {tab.map((e,index) => (
  <h4 key={index}>{e.title}</h4>
            ))}
            <div>
<h5>{restinfo.avgRating}({restinfo.totalRatingsString}) , {restinfo.
costForTwoMessage
}</h5>
<h4>{restinfo.cuisines}</h4>
            </div>
{resmenu.map((category)=>(
    <Restaurantcategories data={category.card?.card}
    />
    ))}
          
        </div>
    )
}
export default Restaurants;