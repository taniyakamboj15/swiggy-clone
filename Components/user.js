import { useState } from "react";

const User = (props) =>{
    const [count]=useState(0);
    return(
        <div className="user_info">
        <h2>count={count}</h2>
            <h2>Name:{props.name}</h2>
            <h3>Location:{props.location}</h3>
            <h4>contact:3456645665</h4>
        </div>
    );
}
export default User;