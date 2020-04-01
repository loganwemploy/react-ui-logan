import React, { Component }from 'react';
import {
  BrowserRouter as Router, 
  Route,
  Switch,
} from 'react-router-dom';
import HomePage from './pages/HomePage.js';
import OnePage from './pages/OnePage.js';
import TwoPage from './pages/TwoPage.js';
import DefinitionsPage from './pages/DefinitionsPage.js';
import Donate from './pages/Donate.js';
import NavBar from './pages/NavBar.js';
import NotFoundPage from './pages/NotFoundPage.js';

import './App.css';

function App() {
  return (
    <Router >
      <div className="App">
        <NavBar />
        <div id='pg-body'>
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/onepage" component={OnePage}  />
            <Route path="/twopage" component={TwoPage}  />
            <Route path="/definitionspage/:name" component={DefinitionsPage}  />
            <Route path="/donate" component={Donate}  />
            <Route component={NotFoundPage}  />
          </Switch>

        </div>
      </div>
    </Router>   
  );
}

export default App;