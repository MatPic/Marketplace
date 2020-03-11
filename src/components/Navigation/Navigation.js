import React, { Component } from 'react';
import * as ROUTES from '../../constants/Routes';
import { Link } from 'react-router-dom';
import { Menu } from 'antd'
// import { withFirebase } from '../Firebase/Firebase'

class Navigation extends Component {
  
  render (props) {
      return (
        <Menu  mode="horizontal" theme="dark" defaultSelectedKeys={['1']} style={{ lineHeight: '64px' }}>
          <Menu.Item>
            <Link to={ ROUTES.LANDING }>Accueil</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to={ ROUTES.SIGNIN }>Se connecter</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to={ ROUTES.SIGNUP }>S'inscrire</Link>
          </Menu.Item>
        </Menu>
      );
  }
  
}

export default Navigation;
