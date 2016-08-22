

import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
 

import App from '../imports/ui/App.jsx'; 
import Helloworld from '../imports/ui/Helloworld.jsx';

Meteor.startup(() => {

    render(<App />, document.getElementById('render-target'));
    render(<Helloworld />, document.getElementById('helloworld'));

});

