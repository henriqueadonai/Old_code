
import React, { Component } from 'react';


export default class CommentForm extends Component {
    handleChange(e){
        console.log(e.target.value);
        this.props.changeTitle(e.target.value);
    }
    
    
  render() {
      console.log(this.props);
    return (
      <div className="commentForm">
        <h1>Change CommentBox Text:</h1>
        <input onChange={this.handleChange.bind(this)} value={this.props.title}></input>
      </div>
    );
  }

}