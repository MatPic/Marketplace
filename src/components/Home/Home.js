import React, { Component } from 'react';
import { withAuthorization } from '../../Authorization';

class Home extends Component {
  
  render (props) {
      if (this.props.auth.loggedUser) {
        return (<h1>"Bienvenue {this.user}"</h1>);
      } else {
        return (<h1>"Veuillez vous connecter ou vous inscrire"</h1>);
      }
      // return (
      //   <h1>{this.props.auth.isLogged ? "Bienvenue" : "Veuillez vous connecter ou vous inscrire"}</h1>
      // );
  }
  
}

export default withAuthorization(Home);
