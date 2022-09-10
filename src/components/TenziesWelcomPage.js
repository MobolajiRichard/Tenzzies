import '../welcomePage.css'
import {Link} from 'react-router-dom'

export default function TenziesWelcomePage(){

    return(
        <div className="welcome-page">
        <h1>TENZIES<span><img className='tenzies-icon' src='/dice false images/dices.png' alt=''/></span></h1>
        <h3>Would you like to play a game?</h3>
        <button ><Link to='/tenzies' className="exit">Play</Link></button>
        <hr/>
        <div className="play">
        <h3 className="how-to-play">How To Play</h3>
        <ul>
            <li>At the start of the game, you're given ten dice.</li>
            <li>Select the dice that matches (i.e the same number).</li>
            <li>Roll the dice until all the ten dice are of the same value.</li>
            <li>Select all the dice before the time runs out.</li>
            <li>You can change the difficulty after the first round.</li>
        </ul>
        </div>
        
        <footer>
            <a href="https:www.linkedin.com/in/mobolaji-richard-oginni-7314b2230">
                <img className="footer-icon" src="/dice false images/icons8-linkedin-circled-48.png" alt=''/>
            </a>
            <a href="https://twitter.com//RichardMBJ23">
                <img className="footer-icon" src="/dice false images/icons8-twitter-48.png" alt=''/>
            </a>
            <a href="https://github.com/MobolajiRichard">
                <img className="footer-icon" src="/dice false images/icons8-github-64.png" alt=''/>
            </a>
        </footer>
        </div>
    )
}