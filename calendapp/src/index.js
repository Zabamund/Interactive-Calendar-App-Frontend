import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, browserHistory } from 'react-router';

import store from './store';

import App from './components/App';
import CurrentUser from './components/CurrentUser';
import AddEvent from './components/AddEvent';
import EventId from './components/EventId';
import UserId from './components/UserId';
import RegisterForm from './components/RegisterForm';

import './index.css';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
            <Router history={ browserHistory }>
                <Route path="/" component={ App } />
                <Route path="/users/currentUser" component={ CurrentUser } />
                <Route path="/users/userId" component={ UserId } />
                <Route path="/users/registerForm" component={ RegisterForm } />
                <Route path="/events/addEvent" component={ AddEvent } />
                <Route path="/events/:eventId" component={ EventId } />
            </Router>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
);
