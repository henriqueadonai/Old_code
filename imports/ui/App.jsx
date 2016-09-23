import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import ReactDOM from 'react-dom';

import { Tasks } from '../api/tasks.js';

import Task from './Task.jsx';

import Login from './Login.jsx';


// App component - represents the whole app
class App extends Component {
    
    constructor(props){
        super(props);
        
        this.state ={
          hideCompleted: false,  
        };
    }

  renderTasks() {
      let filteredTasks = this.props.tasks;
      if(this.state.hideCompleted){
          filteredTasks = filteredTasks.filter(task => !task.checked);
      }
      
      return filteredTasks.map((task) => 
                               <Task key={task._id} tasked={task}/>
                              );

  }

  renderLogin(){
    return (<Login />);
  }
    
    handleSubmit(event){
        event.preventDefault();

        const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
        Tasks.insert({
            text,
            createdAt : new Date(),
            user: "Henrique Meteor",
        });
        ReactDOM.findDOMNode(this.refs.textInput).value = '';        
    }
    
    toggleHideCompleted(){
        this.setState({
           hideCompleted: !this.state.hideCompleted,
        });
    }
      
componentWillMount(){
    console.log("componentWillMount App");
}

  render() {
    return (
      
      <div className="container">
        <header>
          <h1>GroceryCentrica - ({this.props.incompleteCount})</h1>

        <label className="hide-completed">
             <input type="checkbox"
             readOnly
             checked={this.state.hideCompleted}
             onClick={this.toggleHideCompleted.bind(this)}
             />
              Hide Completed Tasks
          </label>
          {this.renderLogin()}
           <form className='new-task' onSubmit={this.handleSubmit.bind(this)}>
                <input type='text' ref='textInput' placeholder='Type to add new tasks'></input>
            </form>
        </header>      
 
        <ul>
          {this.renderTasks()}
        </ul>

      </div>
    );
  }
}

App.propTypes ={
    tasks: PropTypes.array.isRequired,
    incompleteCount : PropTypes.number.isRequired,
    currentUser: PropTypes.object
}

export default createContainer(() => {
  return {
    //tasks: Tasks.find({}).fetch(),
      tasks: Tasks.find({},{sort: { createdAt: -1}}).fetch(),
      incompleteCount: Tasks.find({checked: { $ne: true }}).count(),
      login : "login"
  };
}, App);

