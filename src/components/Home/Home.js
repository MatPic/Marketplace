import React, { Component } from 'react';
import { withAuthorization } from '../../Authorization';

class Home extends Component {
  
  render () {
      if (this.props.auth.loggedUser) {
        return (
          <div>
            <h1>Bienvenue {this.props.auth.loggedUser.email}</h1>
            <p>Vous pouvez maintenant faire des achats. Bon shopping !</p>
          </div>
        );
      } else {
        return (
          <div>
            <h1>Bienvenue !</h1>
            <p>Veuillez vous connecter ou vous inscrire pour pouvoir acheter</p>
          </div>
        );
      }
  }
  
}

export default withAuthorization(Home);
