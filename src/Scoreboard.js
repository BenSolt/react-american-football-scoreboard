import React, {useState} from "react";
import "./App.css";

function Scoreboard(props) {

//     const [scoreHome, setScoreHome] = useState(0);
//   const [scoreAway, setScoreAway] = useState(0);

    return (

         <div className="topRow">
           <div className="home">
             <h2 className="home__name">Lions2</h2>

             {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */} 

              <div className="home__score">{props.scoreH}</div>
           </div>
           <div className="timer">00:00</div>
           <div className="away">
             <h2 className="away__name">Tigers2</h2>
             <div className="away__score">{props.scoreA}</div>
             
           

           </div>
      </div> 
     
        
      
    )
}   

export default Scoreboard;