import React from "react"

export default function Die(props){

    const style = {
        backgroundColor: props.isHeld? "#59e391" : "white"
    }
    let diceValue;
    if(props.value === 1){
       diceValue = <img  alt="" className='dice-image' src="/dice false images/false-dice-one.png"/>
       }
       else if(props.value  === 2){
         diceValue = <img  alt="" className='dice-image' src="/dice false images/false-dice-2.png"/>
       }
       else  if(props.value  === 3){
        diceValue = <img  alt="" className='dice-image' src="/dice false images/false-dice-3.png"/>
       }
       else if(props.value  === 4){
        diceValue = <img  alt="" className='dice-image' src="/dice false images/false-dice-4.png"/>
       }
       else if(props.value  === 5){
        diceValue = <img  alt="" className='dice-image' src="/dice false images/false-dice-5.png"/>
       }
       else{
        diceValue = <img  alt="" className='dice-image' src="/dice false images/false-dice-6.png"/>
    }
    return(
        <div onClick={props.holdDice} style={style} className="die">
            <div className="die-num">{diceValue}</div>
        </div>
    )
}