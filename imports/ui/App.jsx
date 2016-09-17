import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import ReactDOM from 'react-dom';

import { Tasks } from '../api/tasks.js';

import Task from './Task.jsx';


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
      
//    return this.props.tasks.map((task) => (
//      <Task key={task._id} task={task} />
//    ));
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

  render() {
      console.log(this.props.incompleteCount);
    return (
      <div className="container">            
        <header>
          <h1>Todo List - ({this.props.incompleteCount})</h1>

        <label className="hide-completed">
             <input type="checkbox"
             readOnly
             checked={this.state.hideCompleted}
             onClick={this.toggleHideCompleted.bind(this)}
             />
              Hide Completed Tasks
          </label>
          
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
    incompleteCount : PropTypes.number.isRequired
}

export default createContainer(() => {
    console.log(Tasks.find({}).fetch());
  return {
    //tasks: Tasks.find({}).fetch(),
      tasks: Tasks.find({},{sort: { createdAt: -1}}).fetch(),
      incompleteCount: Tasks.find({checked: { $ne: true }}).count()
  };
}, App);

