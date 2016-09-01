

import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
 

import App from '../imports/ui/App.jsx'; 
import Helloworld from '../imports/ui/Helloworld.jsx';
import CommentBox from '../imports/ui/Comment/Comment.jsx';

Meteor.startup(() => {

    render(<App />, document.getElementById('render-target'));
    render(<CommentBox />, document.getElementById('content'))
    render(<Helloworld />, document.getElementById('helloworld'));
    

});

