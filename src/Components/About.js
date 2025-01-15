
import UserClass from "./UserClass";
import React from "react";
import User from "./user";
class About extends React.Component{
    constructor(props){
    super(props)
    console.log("parent constructor");

}
componentDidMount(){
    
    console.log("parent did mount");
}


render (){
    console.log("parent render");
    return(
        <div>
            <h1>About us</h1>
            <h1>this is my first about us page</h1>
             <User name={"Taniya kamboj"}location={"Dehradun"}/> 
            <UserClass name={"taniya kamboj(class)"} location={"Dehradun"} />
        </div>
    );
}
}
export default About;