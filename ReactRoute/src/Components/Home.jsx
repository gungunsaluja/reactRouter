import React from "react";
import { Outlet } from "react-router-dom";
const Home = () =>{
    return (
        <div>
<Outlet/>
        This is Home page
        </div>
            )
}
export default Home
// if you want that child element should render under parent element then you should give it outlet and if we don't use outlet then child element render hi nhi hopayenge!!!