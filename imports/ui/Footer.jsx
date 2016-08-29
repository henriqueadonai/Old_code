import React, { Component } from 'react';

export default class Footer extends Component {
    
    render(){
        console.log(this.props);
        const titletoTask = "Footer 42";
        return <div title={this.props.title}>{this.props.title}</div>
    }
    
}