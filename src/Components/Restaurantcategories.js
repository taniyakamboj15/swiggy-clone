import Itemlist from "./Itemlist";

const Restaurantcategories = ({data})=>{
    console.log("from rest card",data);
    return(
        <div className="w-6/12 flex justify-between flex-col mt-5 bg-gray-500">
            <div className=" mx-auto my-4  h-16  px-5 w-full flex justify-between ">
            <span className="font-bold text-xl ">{data.title} ({data.itemCards.length})  </span> <span>🔽</span> 
            </div>
            <Itemlist items={data.itemCards }/>
            
             
        </div>
    );
};

export default Restaurantcategories;