import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import App from '../imports/ui/App.jsx';
import Login from '../imports/ui/Login.jsx';

Meteor.startup(() => {
    render(<App />, document.getElementById('render-target'));
//    render(<Login />,document.getElementById('render-login'));
    
});

