import React, { useState, useEffect }from 'react';
import '../App.css'
import WinPopup from './winPopup';
import Die from './die';
import {nanoid} from 'nanoid'
import Confetti from 'react-confetti'
import TimeOutPopup from './timeoutpopup';
// import useTimer from './useTimer';
import { Link } from 'react-router-dom';
import { useTimer } from 'react-timer-hook';


function Tenzies(props) {

const {expiryTimestamp} = props

const [dice, setDice] = useState(allNewDice())
const [gameWon, setGameWon] = useState(false)
const [gameLost, setGameLost] = useState(false)


const {
  seconds,
  start,
  pause,
  restart,
} = useTimer({ expiryTimestamp, onExpire: () => setGameLost(true) });


useEffect(()=>{
  const allHeld = dice.every(die => die.isHeld)
  const firstValue = dice[0].value
  const allSameValue = dice.every(die=> die.value === firstValue)
  if(allHeld && allSameValue){
    setGameWon(true)
    pause()
  }
 
}, [dice, pause ])



function generateDie(){
  return{
      value: Math.ceil(Math.random()*6),
      isHeld:false,
      id: nanoid()
  }
}
  
function allNewDice (){
    const newDice =[]
    for(let i = 0; i<10; i++){
        newDice.push(generateDie());
    }
    return newDice
  }
  
  function holdDice(id){
    setDice(oldDice => oldDice.map(die => {
      return die.id === id ?  {...die, isHeld: !die.isHeld}: die
  } ))
  }
  
  function handleRoll(){
    if(!gameWon){
      setDice( oldDice => oldDice.map((die)=>{
        return die.isHeld? die : generateDie()
  } ))
    }else{
      setGameWon(false)
      setDice(allNewDice())
    }
  }
  
  const diceElements =  dice.map(die=>  
    <Die key={die.id} value={die.value} isHeld={die.isHeld} holdDice={()=> holdDice(die.id)}/> )


  return (
  <div className='tenzies-container'>
    {gameWon && <Confetti/>}
    <main className='main'>
        <h1 className='tenzies-header'>TENZIES<span><img className='tenzies-icon' src='/dice false images/dices.png' alt=''/></span></h1>
        <div className='timer'>
          <img className='display-time' src='/dice false images/hourglass.png' alt=''/>
          <h3 className='tenzies-counter'>00:{seconds < 0 ? '00' : (seconds < 10 ? `0${seconds}` : seconds)}</h3>
        </div>
        
        <div className='dice-container'>
          {diceElements}     
        </div>
        <div className='game-button'>
          <button className='roll-dice' onClick={handleRoll}>
          {gameWon? "New Game" : "Roll Dice"}
          </button>
          <button className='exit-button'><Link to='/' className='exit'>Exit</Link></button>
        </div>
    </main>
    {gameLost && <TimeOutPopup restart={restart} start={start} gameLost = {()=>setGameLost(false)} setDie={()=>setDice(allNewDice())}/>}
    {gameWon && <WinPopup time={seconds} restart={restart} start={start} gameWon = {()=>setGameWon(false)} setDie={()=>setDice(allNewDice())}/> }
  </div>
    
  );
}

export default Tenzies;