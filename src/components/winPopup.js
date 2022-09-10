import React from "react";
import {Link} from 'react-router-dom'

export default function WinPopup ({restart, gameWon, setDie, time}){
    const easytime = new Date();
    easytime.setSeconds(easytime.getSeconds() + 60)

    const mediumtime = new Date();
    mediumtime.setSeconds(mediumtime.getSeconds() + 40)

    const hardtime = new Date();
    hardtime.setSeconds(hardtime.getSeconds() + 20)

    const easy = ()=>{
        restart(easytime)
         gameWon()
         setDie()
    }

    const medium = ()=>{
        restart(mediumtime)
         gameWon()
         setDie()
    }

    const hard = ()=>{
        restart(hardtime)
         gameWon()
         setDie()
    }
    return(
        <div className="popup-container">
            <div className="popup-box">
              
                    <h1 className="popup-header-text">Congratulations!</h1>
                    <p>You Won</p>
                    <img className="popup-gif" src="/dice false images/party-popper.png"alt=""/>
                    <div className="popup-main">
                        <h2 className="popup-change">Change Difficulty?</h2>
                        <hr width="35%"/>
                        <button onClick={easy} className="popup-easy-button">Easy</button>
                        <button onClick={medium} className="popup-medium-button">Medium</button>
                        <button onClick={hard} className="popup-hard-button">Hard</button>
                        <hr width="35%"/>
                     </div>
                     <div className="popup-footer">
                            <button  className="popup-close-button"><Link className="close" to='/'>Close</Link></button>
                        </div>
            </div>
        </div>                 
    )
}