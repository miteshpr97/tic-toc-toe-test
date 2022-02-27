import React,{Components} from "react";
class Instaclone extends React.Component{
    constructor(props){
        super(props);
        
        
    }
    render(){
        const style = {position:"fixed",bottom:"0px",left:"0px",
    backgroundColor:"violet",width:"100vw",display:"flex",justifyContent:"space-evenly"};
        return(
            <>
            <div style={style}>
           <button>Home</button>
           <button>Search</button>
           <button>Reels</button>
           <button>Activity</button>
           <button>profile</button>
           </div>
           


            </>
        )
    }


}
export default Instaclone;