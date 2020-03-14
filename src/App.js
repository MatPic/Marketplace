import React, { Component } from 'react';
import * as ROUTES from './constants/Routes';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Navigation from './components/Navigation/Navigation';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import { Layout } from 'antd';
import './App.css';
import styled from 'styled-components';
import { withAuthorizationProvider } from './Authorization';
import { withArticleProvider } from './components/Panier/Article';
import Panier from "./components/Panier/Panier";

const { Header, Footer, Content } = Layout;

const SiteLayoutContent = styled.div`
  background: #fff;
  padding: 24px;
  min-height: 280px;
`;

class App extends Component {
  render () {
    return (
        <Router>
          <Layout>
            <Header><Navigation/></Header>
            <Content style={{ padding: '0 50px' }}>
              <SiteLayoutContent>
                <Route exact path={ ROUTES.LANDING }>
                  <Home />
                </Route>
                <Route exact path={ ROUTES.SIGNIN }>
                  <SignIn/>
                </Route>
                <Route exact path={ ROUTES.SIGNUP }>
                  <SignUp/>
                </Route>
                <Route path={ ROUTES.PANIER }>
                  <Panier />
                </Route>
              </SiteLayoutContent>
            </Content>
            <Footer></Footer>
          </Layout>
        </Router>
    );
  }
  
}

export default withAuthorizationProvider(App);
