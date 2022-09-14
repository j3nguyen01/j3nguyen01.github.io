import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage'; 
import MainCard from './MainCard';
import About from './About';
import Experiences from './Experiences';
import Projects from './Projects';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path = "/" element = {<HomePage/>}/>
          <Route exact path = "/about" element = {<About/>}/>
          <Route exact path = "/experiences" element = {<Experiences/>}/>
          <Route exact path = "/projects" element = {<Projects/>}/>
          {/* <Route exact path = "/" element = {<Experiences/>}/> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
