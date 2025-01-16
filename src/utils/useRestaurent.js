import { useState,useEffect } from "react";

const useRestaurent = () => {
    const [rest,setRest] = useState([]);
    const [name , setName] = useState("taniya");
    console.log("body rendered");
    useEffect(()=>{
     fetchData();
    },[])
    const fetchData = async () => {
     
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6139298&lng=77.2088282&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
   const data1 = await data.json();
   const restaurent = data1?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
   setRest(restaurent);
    }

    return {rest,setRest};
}
export default useRestaurent;