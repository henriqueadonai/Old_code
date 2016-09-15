

import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import ReactDOM from 'react-dom';

import { Tasks } from '../api/tasks.js';

import Task from './Task.jsx';


// App component - represents the whole app
class App extends Component {

  renderTasks() {
    return this.props.tasks.map((task) => (
      <Task key={task._id} task={task} />
    ));
  }
    
    handleSubmit(event){
        event.preventDefault();
        //    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
        
        const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
        console.log(this.refs.value);
        console.log(this.refs.textInput);
        console.log('Tasks');
        console.log(Tasks);
        console.log(text);
        Tasks.insert({
            text,
            createdAt : new Date(),
            user: "Henrique Meteor",
        });
        ReactDOM.findDOMNode(this.refs.textInput).value = '';
        
    }

  render() {
    return (
      <div className="container">            
        <header>
          <h1>Todo List</h1>
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
    tasks: PropTypes.array.isRequired
}

export default createContainer(() => {
    console.log(Tasks.find({}).fetch());
  return {
    //tasks: Tasks.find({}).fetch(),
      tasks: Tasks.find({},{sort: { createdAt: -1}}).fetch()
  };
}, App);

