import { IMAGE_URL } from "../constants/imageAdd";
const Itemlist = ({items})=>{
    console.log(items?.card?.info);
    return(
        <div className="">
     
   
            {items.map((item)=>(
                
                <div key={item.card.info.id} className="p-4 m-2 border-black border-b-8  text-left h-44 flex justify-between items-center">
                    <div className="py-2 w-7/12">
                        
                <span>{item.card.info.name}</span>
                <span> ₹ -{item.card.info.price?item.card.info.price/100:item.card.info.defaultPrice/100}</span>
                <p className="text-xs">{item.card.info.description}</p>
            </div>
           <div className="w-3/12 h-full p-5 relative ">
            <div className="absolute bottom-[-10px] left-1/2 transform translate-x-1/2 ">
            <button className="p-2 w-17 h-10 border border-black bg-green-200 rounded-md text-center">Add +</button>
            </div>
            <div>
            <img src= {IMAGE_URL+ item.card.info.imageId}className="w-96 h-32  object-cover rounded-md" ></img>
            </div>
            </div>

           
</div>))}
                
        </div> // pehle to image or text ko ek line me lana hai toh uske liye kya krogi flex yes   a firse glt jgh lagya dhyaan se dekhjo image or div kaunse div k andar hai ???
    )
}
export default Itemlist;