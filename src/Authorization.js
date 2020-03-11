import React, { Component } from 'react';
import Firebase from './components/Firebase/Firebase';

export const AuthContext = React.createContext(null);

export class AuthorizationProvider extends Component{
    constructor (props) {
        super(props);
        this.firebase = new Firebase();
        
        this.state = {
            firebase: this.firebase,
            loggedUser: undefined,
            signIn: (email, password) => {
                this.firebase.doSignInWithEmailAndPassword(email, password).then(user => {
                    this.setState({loggedUser: user});
                });
            },
            signUp: (email, password) => {
                this.firebase.doCreateUserWithEmailAndPassword(email, password).then(user => {
                    console.log(user);
                });
            },
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
