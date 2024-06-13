import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';
import PlayerManager from './components/PlayerManager';
import SelectedTeam from './components/SelectedTeam';
import Bidding from './components/Bidding';
const Header = () => {
  return (
    <header>
      <nav>
        <div className="header">
          <h1 className="home"><Link to="/">Cricbid</Link></h1>
          
          <ul className="nav-links">
            <li>
              <Link to="/team-management">Team Management</Link>
            </li>
            <li>
              <Link to="/bidding">Bidding</Link>
            </li>
            <li>
              <Link to="/selected-team">Selected Team</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};




const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<PlayerManager/>} />
         
          <Route path="/bidding" element={<Bidding/>} />
          <Route path="/selected-team" element={<SelectedTeam/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
