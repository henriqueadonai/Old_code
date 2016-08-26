import React, { Component } from 'react';
import Task from './Task.jsx';


export default class Helloworld extends Component {
    
    renderName(){
        return <h1>Grocery Centrica</h1>;
    }
    
    
    render(){
            return <div>{this.renderName()}</div>;
    }
}

