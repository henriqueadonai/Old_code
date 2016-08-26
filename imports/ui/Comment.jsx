import React, { Component } from 'react';

export default class CommentBox extends Component {
    render(){
        return (<div>
           <h1>Comments Box</h1>
           <Comment />
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