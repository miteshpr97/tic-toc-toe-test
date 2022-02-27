import React, {Component} from "react";
import GreetPerson from "./greetperson";

class rect extends React.Component{
    constructor(props){
        super(props)
        this.state={

            text:"",
        }
        this.inputRef = React.createRef();
       
        
    }
    updateText=(e)=>{
        const newVal = this.inputRef.current.value;
        this.setState({
            text:newVal

        })
    }
    render(){
        const name =[
            'Neelkatnh',
            'kushagra',
            'Simon'

        ];
        return(
            <div>
                <h2>This is Rect_ref</h2>
                <input ref={this.inputRef}type="text" placeholder="text"/><br/>
                <button onClick={this.updateText}>Update below</button>
                <h2>{this.state.text}</h2>
                <br/>
                <br/>
                {name.map}
                 <GreetPerson />
                
               
            </div>

    
        );
    }

}
export default rect