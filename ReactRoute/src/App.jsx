import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Route,Routes} from 'react-router-dom';
import Home from "./Components/Home";
import About from './Components/About';
import Labs from './Components/Labs';
import NotFound from './Components/NotFound';
import Support from './Components/Support';
import {Link } from 'react-router-dom';   

function App() {
  

  return (
    <div className = "App">
      <nav>
        <ul>
          <li><Link to ="/">Home</Link></li>
          <li>
            <Link to = "/about">About</Link></li>
          <li><Link to = "/support">Support</Link></li>
          <li><Link to = "/labs"></Link>Labs</li>
        </ul>
      </nav>
      <Routes>
        < Route path = "/" element = {<Home/>}/>
        <Route path = "/support" element ={<Support/>}  />
        <Route path = "/about" element ={<About/>}  />
        <Route path = "/labs" element ={<Labs/>}  />
        <Route path = "*" element ={<NotFound/>}  />
        
      </Routes>
     
        
    </div>
  );
}

export default App
