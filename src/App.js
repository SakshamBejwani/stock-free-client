import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {useState} from 'react'
import Navbar from './components/Navbar/Navbar';
import Home from './Pages/Home';
import Landing from './Pages/Landing';
import Contribute from './Pages/Contribute';
function App() {

  const [path, setPath] = useState(1)
  return (
    <div className="App">
        <div class="card">
        <ul>
          <li class="fw-bold my-2 h3 custom-pointer" onClick={()=> setPath(1)}>Home</li>
          <li class="fw-bold my-2 h3 custom-pointer" onClick={()=> setPath(2)}>Library</li>
          <li class="fw-bold my-2 h3 custom-pointer" onClick={()=> setPath(3)}>Contribute</li>
          
        </ul>
        </div>

      {
        (path==1)?(
          <Landing/>
        ):(path==2)?(
          <Home/>
        ):(
          <Contribute/>
        )
      }
    </div>
  );
}

export default App;
