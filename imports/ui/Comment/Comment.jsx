import React, { Component } from 'react';

import CommentForm from './CommentForm.jsx';
import CommentList from './CommentList.jsx';

export default class CommentBox extends Component {
    constructor(){
        super();
        this.state = { name: "AppCentrica", title : "Comments Box"};
        
    }
    
    changeTitleBox(title){
        this.setState({title});
    }
    
    
    render(){
        setTimeout(() => {
            this.setState({name : "GroceryCentrica"})
        },5000);
        
        return (<div>
         <p>
          {this.state.name}
          </p>
          
           <h1>{this.state.title}</h1>
            <CommentList />
            <CommentForm changeTitle={this.changeTitleBox.bind(this)} title={this.state.title}/>
        
        </div>);
    }
     
}





