import { useState,useEffect } from "react";

const useRestaurent = () => {
    const [rest,setRest] = useState([]);
    const [title , setTitle] = useState("");
    const [imageList,setImageList] = useState([]);
    const [topHeader,setTopHeader] = useState("");
    const [topRest,setTopRest] = useState([]);
    const [onlineFood,setOnlineFood]=useState("");
    const [onlineRest,setOnlineRest]= useState([]);
    console.log("body rendered");
    useEffect(()=>{
     fetchData();
    },[])
    const fetchData = async () => {
     
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6139298&lng=77.2088282&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
   const data1 = await data.json();
   const restaurent = data1?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
   const firstHeader = data1?.data?.cards[0]?.card?.card?.header?.title;
   const imageArray = data1?.data?.cards[0]?.card?.card?.imageGridCards?.info;
   const topRestHeader = data1?.data?.cards[1]?.card?.card?.header?.title;
   const topRest = data1?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
   const onlineFood = data1?.data?.cards[2]?.card?.card?.title;
   setOnlineFood(onlineFood);
   const onlineRest =  data1?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
   setOnlineRest(onlineRest);
   setTopHeader(topRestHeader);
   setTopRest(topRest);
   console.log("api resuilt",data1)
   setImageList(imageArray);
   setRest(restaurent);
   setTitle(firstHeader);
    }

    return {rest,setRest,title,imageList,topHeader,topRest,onlineFood,onlineRest};
}
export default useRestaurent;