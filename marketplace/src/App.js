import React, { Components } from 'react';
import * as ROUTES from './constants/Routes';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Navigation from './components/Navigation/Navigation';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';

class App extends Components {
  render () {
    return (
      <React.Fragment>
        <Navigation/>
        <hr/>
        <Router exact path={ ROUTES.LANDING } >
          <Home/>
        </Router>
        <Router exact path={ ROUTES.SIGNIN }>
          <SignIn/>
        </Router>
        <Router exact path={ ROUTES.SIGNUP }>
          <SignUp/>
        </Router>
      </React.Fragment>
    );
  }
  
}

export default App;
