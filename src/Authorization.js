import React, { Component } from 'react';
import Firebase from './components/Firebase/Firebase';

export const AuthContext = React.createContext(null);

export class AuthorizationProvider extends Component{
    constructor (props) {
        super(props);
        this.firebase = new Firebase(user => {
          this.setState({ loggedUser: user });
        });
        
        this.state = {
            firebase: this.firebase,
            loggedUser: undefined,
            signIn: this.firebase.doSignInWithEmailAndPassword,
            signUp: this.firebase.doCreateUserWithEmailAndPassword,
            signOut: this.firebase.doSignOut
        };
    }
      
    render (){
        return(
            <AuthContext.Provider value={this.state}>
                {this.props.children}
            </AuthContext.Provider>
        );
    }
}

export const withAuthorizationProvider = (Component) => props => (
    <AuthorizationProvider>
        <Component {...props}></Component>
    </AuthorizationProvider>
);


export const withAuthorization = (Component) => props => (
    <AuthContext.Consumer>
    {
        firebase => <Component {...props} auth={firebase} />
    }
    </AuthContext.Consumer>
);
