import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
import { Tasks } from '../api/tasks.js';
import Task from './Task.jsx';
import LoginGoogle from './Login.jsx';



// App component - represents the whole app
class App extends Component {

    constructor(props){
        super(props);
        
        this.state = {
          hideCompleted: false,  
          connect : false,
          userobj: null,
          error: null            
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
    
  handleSubmit(event){
        event.preventDefault();
        var connect = this.state.connect;
          if (connect){          
                const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
                Meteor.call('tasks.insert', text,this.state.userobj.email);
              
//                Tasks.insert({
//                    text,
//                    createdAt : new Date(),
//                    user: this.state.userobj.email,
//                });
                ReactDOM.findDOMNode(this.refs.textInput).value = '';        
          }
    }
    
    toggleHideCompleted(){
        this.setState({
           hideCompleted: !this.state.hideCompleted,
        });
    }

handleUserLogin(connect, userObj) {
    this.setState({
      connect: connect,
      userobj: userObj
    });
}

  render() {
    return (
      
      <div className="container">
        <LoginGoogle connect={this.state.connect}  userobj={this.state.userobj} handleUserLogin={this.handleUserLogin.bind(this)}/>
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

           <form className='new-task' onSubmit={this.handleSubmit.bind(this)}>
                <input type='text' ref='textInput' placeholder='Type to add new a grocery...'></input>
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
    currentUser: PropTypes.object,
}

export default createContainer(() => {
  return {
      tasks: Tasks.find({},{sort: { createdAt: -1}}).fetch(),
      incompleteCount: Tasks.find({checked: { $ne: true }}).count(),
  };
}, App);

