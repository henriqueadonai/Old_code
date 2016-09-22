import GoogleLogin from 'react-google-login';

import React, { Component, PropTypes } from 'react';

import ReactDOM from 'react-dom';

const responseGoogle = (response) => {
    console.log("Google return");
  console.log(response);
}

export default class Login extends Component {
    

    
    render() {
        console.log('Henriqueee');
        return (
        <GoogleLogin
            clientId="466670531300-vhks4a5l6bda3u3847gj4qs33qgsupfb.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
          />       
        
        );
    }   
    
}