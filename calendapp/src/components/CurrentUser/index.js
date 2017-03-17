import React, { Component } from 'react';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import {List} from 'material-ui/List';

import CalendarCard from '../CalendarCard';

import { styleRaisedButton, stylePaper, userName, commandBar, eventsListContainer, eventList } from './constants.js';

class CurrentUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            token: '',
            eventId: ''
        };
    }

    logout = (event) => {
        event.preventDefault();
        // clear redux state, clear local storage then go to start page and maybe display an alert ?
        this.props.router.push('/')
        console.log('you have logged out');
    }

    addEvent = (event) => {
        event.preventDefault();
        // go to event creation form
        this.props.router.push('/events/addEvent')
    }

    render() {
        return (
            <div className="CurrentUser">
                <div style={userName} className="App-header">
                    <h2>Current User</h2>{/*add actual userName with this.props.currentUser.firstName*/}
                </div>
                <div style={commandBar} className="headerBar">
                    <RaisedButton onClick={this.logout} label="Logout" secondary={true} style={styleRaisedButton}/>
                    <RaisedButton onClick={this.addEvent} label="Add Event" primary={true} style={styleRaisedButton}/>
                    <Paper style={stylePaper} zDepth={3}>User image ?</Paper>
                </div>
                <div className="eventsListContainer" style={eventsListContainer}>
                    <List className="eventList" style={eventList}>
                        {this.props.events.map((calendarEvent, index) => { // beware events.events CURRENTLY depends on defaultState
                            return (
                                <CalendarCard
                                key={index}
                                title={this.props.events[index].eventName}
                                subtitle={this.props.events[index].date}
                                avatar={this.props.events[index].picture}
                                description={this.props.events[index].description}
                                routerProps={this.props.router}
                                index={index}
                                eventId={this.props.events[index].eventId}
                                />
                            )
                        })}
                    </List>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(CurrentUser);
