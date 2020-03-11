import React, { Component } from 'react';
import { Firebase, withFirebase } from '../Firebase/Firebase'

export const AuthContext = React.createContext(null);

export class AuthorizationProvider extends Component{
    state = {
        loggedUser : undefined,
        signIn : doSignInWithEmailAndPassword,
        signUp : doCreateUserWithEmailAndPassword,
        toLogin : ()=> this.setState({isLogged : true}),
    }
    render (){
        return(
            <AuthContext.Provider value={this.state}>
                {this.props.children}
            </AuthContext.Provider>
        )
    }
}

export const withAuthorizationProvider = (Component) => props => (
    <AuthorizationProvider>
        <Component {...props}></Component>
    </AuthorizationProvider>
)


export const withAuthorization = (Component) => props => (
    <AuthContext.Consumer>
    {
        value => <Component {...props} auth={value}></Component>
    }
    </AuthContext.Consumer>
)
