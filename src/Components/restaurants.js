import { useEffect, useState } from "react";
import { RESMENU } from "../utils/constant";
import { useParams } from "react-router-dom";
import ShimmerUI from "./Shimmer";
 
const Restaurants=()=>{
    const {resId} = useParams();
    const [rest , setRest] = useState();
    const [tab,setTab] = useState();
    const [restinfo,setRestInfo] = useState();
    const [resmenu, setResMenu] = useState();
    useEffect(()=>{

        fetchdata();
    },[])
    const fetchdata = async()=>{
        const rest = await fetch(RESMENU + resId);
        const data1 = await rest.json();
        console.log("hello fro restrauant info",data1);
        setRest(data1?.data?.cards[0]?.card?.card?.text);
        setTab(data1?.data?.cards[1].card.card.tabs);
        setRestInfo(data1?.data?.cards[2]?.card?.card?.info);
        setResMenu(data1?.data?.cards[4]?.groupedCard?.cardGroupMap?. REGULAR?.cards[4]?.card?.card?.itemCards)
    }
  

  if(!rest) return <ShimmerUI />;
  console.log("menu",resmenu[0]?.card?.info?.name);
  console.log(resmenu)


    return(
        <div id="cont">
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
            <div>
{resmenu.map((res,index)=>( <h4 key={index}>{res.card?.info?.name}</h4>)
)}
            </div>
          

        </div>
    )
}
export default Restaurants;