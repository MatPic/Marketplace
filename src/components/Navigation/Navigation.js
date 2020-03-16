import React, { Component } from 'react';
import * as ROUTES from '../../constants/Routes';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import { withAuthorization } from '../../Authorization';

class Navigation extends Component {
  
  render () {
    if (this.props.auth.loggedUser) {
      return (
        <Menu  mode="horizontal" theme="dark" defaultSelectedKeys={['1']} style={{ lineHeight: '64px' }}>
          <Menu.Item>
            <Link to={ ROUTES.LANDING }>Accueil</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to={ ROUTES.PANIER }>Panier</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to={ ROUTES.SIGNIN } onClick={this.props.auth.signOut}>Se déconnecter</Link>
          </Menu.Item>
        </Menu>
      );
    } else {
      return (
        <Menu  mode="horizontal" theme="dark" defaultSelectedKeys={['1']} style={{ lineHeight: '64px' }}>
          <Menu.Item>
            <Link to={ ROUTES.LANDING }>Accueil</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to={ ROUTES.SIGNUP }>S'inscrire</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to={ ROUTES.SIGNIN }>Se connecter</Link>
          </Menu.Item>
        </Menu>
      );
    }
  }
  
}

export default withAuthorization(Navigation);
