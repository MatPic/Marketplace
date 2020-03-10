import React, { Component } from 'react';

export const AuthContext = React.createContext(null);

export const withAuthorization = (Component) => 
	class MyComponentReturn extends Component {
    	render() {
    	return (
    		<AuthContext.Consumer>
            {
    	        value => <myComponent isLogin={value.isLogin} toLogIn={value.toLogIn}/>
            }
            </AuthContext.Consumer>
        )
    }
}
