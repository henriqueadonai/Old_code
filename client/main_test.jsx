import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from "react-router"
 

import App from '../imports/ui/App_test.jsx'; 
import Helloworld from '../imports/ui/Helloworld.jsx';
import CommentBox from '../imports/ui/Comment/Comment.jsx';

//Meteor.startup(() => {
//
//    render(<App />, document.getElementById('render-target-test'));
//    render(<CommentBox />, document.getElementById('content'))
//    render(<Helloworld />, document.getElementById('helloworld'));
//    
//
//});

