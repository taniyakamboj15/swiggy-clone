// src/UserClass.js
import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props)
        this.state={
            count:0,
            
        }
        console.log("child constructor");
        
    }

    componentDidMount(){
        console.log("chlid component did mount")
    }
    render() {
        console.log("child render")
        return (
            <div className="user_card">
            <h2>count={this.state.count}</h2>
            <button onClick={()=>{
                this.setState({
                    count:this.state.count +1,

                });
              
            }} 
            >
            button increase
            </button>
    
                <h2> Name:{this.props.name}</h2>
                <h3>Location:{this.props.location}</h3>
                <h4>Contact:4547655786</h4>

            </div>
        );
    }
}
export default UserClass;
