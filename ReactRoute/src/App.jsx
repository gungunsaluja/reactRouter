import './App.css'
import { Route, Routes } from 'react-router-dom';
import Mainheader from "./Components/Mainheader";
import About from './Components/About';
import Labs from './Components/Labs';
import NotFound from './Components/NotFound';
import Support from './Components/Support';
import Home from './Components/Home'
import { Link, NavLink } from 'react-router-dom';


function App() {


  // routes is used to navigate between pages and navigations me page reload nhi hona chahiyeee dynamically usi page par changes hote hai
  // navlink lgane se active class aajatii h so then we can add styling to reflect it

  return (
    <div className="App">
      <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/support">Support</NavLink></li>
          <li><NavLink to="/labs">Labs</NavLink></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Mainheader />} />
        <Route index element= {<Home/>}></Route>
        {/* it define root url of the application  */}
        {/* index likhne ka mtlb ye h ki ye default  route hai*/}
        <Route path="/support" element={<Support />} />
        <Route path="/about" element={<About />} />
        <Route path="/labs" element={<Labs />} />
        <Route path="*" element={<NotFound />} />
        {/* all undefined pathsand it is often used in showing error 404 */}
        {/* iska difference find krooo default line ke sath */}

      </Routes>


    </div>
  );
}

export default App
