import React, { Component } from 'react';

export default class CommentBox extends Component {
    constructor(){
        super();
        this.state = { name: "AppCentrica"};
    }
    
    render(){
        setTimeout(() => {
            this.setState({name : "GroceryCentrica"})
        },5000);
        
        return (<div>
         <p>
          {this.state.name}
          </p>
           <h1>Comments Box</h1>
            <CommentList />
            <CommentForm/>
        </div>);
    }
     
}

var CommentList = React.createClass({
  render: function() {
    return (
      <div className="commentList">
        Hello, world! I am a CommentList.
      </div>
    );
  }
});

var CommentForm = React.createClass({
  render: function() {
    return (
      <div className="commentForm">
        Hello, world! I am a CommentForm.
      </div>
    );
  }
});


