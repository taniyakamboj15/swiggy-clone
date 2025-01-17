import { useState } from "react";
import Itemlist from "./Itemlist";

const Restaurantcategories = ({data})=>{
    console.log("from rest card",data);
    const[showdata,setShowdata]= useState(false);
    const handleClick=()=>{
        setShowdata(!showdata);
    }
    return(
        <div className="w-6/12 flex justify-between flex-col mt-5 bg-gray-500">
            <div className=" mx-auto my-4  h-16  px-5 w-full flex justify-between cursor-pointer
             onClick={handleClick}">
            <span className="font-bold text-xl ">{data.title} ({data.itemCards.length})  </span> <span onClick={handleClick}>🔽</span> 
            </div>
           {showdata && <Itemlist items={data.itemCards }/>}
            
             
        </div>
    );
};

export default Restaurantcategories;