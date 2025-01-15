import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/Components/Header";
import Body from "./src/Components/Body";
import About from "./src/Components/About";
import Contact from "./src/Components/Contact";
import Error from "./src/Components/Error";
import Restaurants from "./src//Components/restaurants";
import { createBrowserRouter,RouterProvider , Outlet} from "react-router-dom";
import ShimmerUI from "./src/Components/Shimmer";
import "./index.css"


const Grocery = lazy(()=>import("./src/Components/Grocery"));

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
                element:(<Suspense fallback={<ShimmerUI/>}>< Grocery /></Suspense>),
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
