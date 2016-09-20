import GoogleLogin from 'react-google-login';

import React, { Component, PropTypes } from 'react';

import ReactDOM from 'react-dom';

const responseGoogle = (response) => {
  console.log(response);
}

export default class Login extends Component {
    

    
    render() {
        console.log('Henriqueee');
        return (
        <GoogleLogin
            clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
          />       
        
        );
    }   
    
}