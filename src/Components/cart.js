import { useDispatch, useSelector } from "react-redux";
import Itemlist from "./Itemlist";
import { useDispatch } from "react-redux";
import { clearItem } from "../utils/cartslice";
import { clearItem } from "../utils/cartslice";
const Cart=()=>{
    const dispatch= useDispatch();
    const cartItems =useSelector((store)=> store.cart?.items);
    console.log(cartItems)
    const handleClick=()=>{
        dispatch(clearItem());

    }
    return(
        <div className="text-center m-4 p-4">
            <h1 className="font-bold text-xl">Cart</h1>
            <button className="border-solid bg-black text-white rounded-md w-20 " onClick={handleClick} >Clear cart</button>
            {cartItems.length===0 }<h1>cart is empty </h1>
            <div>
                <Itemlist items={cartItems}/>
            </div>
        </div>

        
    
    )
}

export default Cart;