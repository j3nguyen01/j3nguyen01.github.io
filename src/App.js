import './globals.css';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage'; 
import OOO from './OOO';
import AboutMe from './AboutMe';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path = "/" element = {<HomePage/>}/>
          <Route exact path = "/about_me" element = {<AboutMe/>}/>
          <Route exact path = "/out_of_office" element = {<OOO/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
