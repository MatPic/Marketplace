import React, { Component } from 'react';
import * as ROUTES from './constants/Routes';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Navigation from './components/Navigation/Navigation';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import { Layout } from 'antd';

const { Header, Footer, Content } = Layout;

class App extends Component {
  render () {
    return (
      <Router>
        <Layout>
          <Header><Navigation/></Header>
          <Layout>
            <Route exact path={ ROUTES.LANDING }>
              <Home/>
            </Route>
            <Route exact path={ ROUTES.SIGNIN }>
              <SignIn/>
            </Route>
            <Route exact path={ ROUTES.SIGNUP }>
              <SignUp/>
            </Route>
          </Layout>
          <Footer></Footer>
        </Layout>
      </Router>
    );
  }
  
}

export default App;
