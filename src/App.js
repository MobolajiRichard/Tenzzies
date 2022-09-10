import { Routes, Route} from 'react-router-dom'
import './App.css';
import Tenzies from './components/tenzies';
import TenziesWelcomePage from './components/TenziesWelcomPage';



function App() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 60)  

  return (
    <div className='app'>
    <Routes>
    <Route path='/' element={<TenziesWelcomePage/>}/>
    <Route path='tenzies' element={<Tenzies expiryTimestamp={time}/>}/>
    </Routes>               
    </div>
  );
}

export default App;
