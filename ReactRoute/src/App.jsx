import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Route,Routes} from 'react-router-dom';
import NotFound from './Components/NotFound';

function App() {
  

  return (
    <div className = "App">
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Support</li>
          <li>Labs</li>
        </ul>
      </nav>
      <Routes>
        <Route path = "/" element ={<div>Home Page</div>}  />
        <Route path = "/support" element ={<Home/>}  />
        <Route path = "/about" element ={<About/>}  />
        <Route path = "/labs" element ={<Labs/>}  />
        <Route path = "*" element ={<NotFound/>}  />
        
      </Routes>
     
        
    </div>
  )
}

export default App
