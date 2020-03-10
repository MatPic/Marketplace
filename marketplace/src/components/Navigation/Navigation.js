import React, { Components } from 'react';
import * as ROUTES from '../../constants/Routes';
import { Link } from 'react-router-dom';

class Navigation extends Components {
  
  render () {
      return (
        <div>
            <ul>
                <li><Link to={ ROUTES.LANDING }>Home</Link></li>
                <li><Link to={ ROUTES.SIGNIN }>Sign In</Link></li>
                <li><Link to={ ROUTES.SIGNUP }>Sign Up</Link></li>
            </ul>
        </div>
      );
  }
  
}

export default Navigation;
