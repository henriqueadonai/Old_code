import GoogleLogin from 'react-google-login';

import React, { Component, PropTypes } from 'react';

import ReactDOM from 'react-dom';


export default class Login extends Component {

constructor(props){
    super(props);

    this.state = {
        connect: false,
        userobj: null,
        error: null,
    };
    this.responseGoogleOnSuccess = this.responseGoogleOnSuccess.bind(this);
}

componentWillMount(){
    console.log("componentWillMount Login");
    
}

    responseGoogleOnSuccess(response){
          this.setState({userobj: response});

        // this.setState({
        //    connect: true,
        //    obj: response,
        //    error: false,
        // });
        console.log(response);
    }

    responseGoogleOnFailure(){
        console.log(failure);
    }


    render() {
        return (
        <GoogleLogin
            clientId="466670531300-vhks4a5l6bda3u3847gj4qs33qgsupfb.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={this.responseGoogleOnSuccess}
            onFailure={this.responseGoogleOnFailure}
          />       
        
        );
    }   
    
}