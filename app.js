import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import Restaurants from "./Components/restaurants";
import { createBrowserRouter,RouterProvider , Outlet} from "react-router-dom";
import ShimmerUI from "./Components/Shimmer";


const Grocery = lazy(()=>import("./Components/Grocery"));

const AppLayout=()=>{
    return(
        <div>
            <Header/>
            <Outlet />
            
        </div>
    )
}
const Approuter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,
        children:[
            {
            path:"/",
            element:<Body/>,
            },
            {
                path:"/About",
                element:< About />,
            },
            {
                path:"/Contact",
                element:< Contact />,
            },
            {
                path:"/grocery",
                element:<Suspense fallback={<ShimmerUI/>}>< Grocery /></Suspense>,
            },
            {
                path:"/restaurants/:resId",
                element:< Restaurants/>,
            }
        ],
        errorElement: < Error/>,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={Approuter}/>);