import React, { Component } from 'react';
import { connect } from 'react-redux';

import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import {List, ListItem} from 'material-ui/List';
import EventItem from '../EventItem';


// import { styleRaisedButton, stylePaper, userName, commandBar, eventsCalendar, calendarStyle } from './constants.js'
// why could we not import these styles from './constants.js'

const styleRaisedButton = { margin: 12 };

const stylePaper = {
  height: 100,
  width: 100,
  margin: 20,
  textAlign: 'center',
};

const userName = { textAlign: 'center' };

const commandBar = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center'
};

const eventsCalendar = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center'
};

const calendarStyle = {
  height: '60vh',
  width: '60%',
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};


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

    goToEvent = (index) => {
        // event.preventDefault();
        //require token
        this.props.router.push('/events/' + index)
    }
/*
<Paper>
  <List>
    <EventItem key = {index} onClick={this.goToEvent.bind(this, index)} primaryText={this.props.login[index].eventName}/>
  </List>
</Paper>

*/
    render() {
      console.log(this.props.login);

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
                <div className="eventsCalendarContainer" style={eventsCalendar}>
                    <List className="eventList">
                        {/*only display 10 events*/}
                        {this.props.login.map((calendarEvent, index) => {
                          return (
                            <ListItem
                                key={index}
                                onClick={this.goToEvent.bind(this, index)}
                                primaryText={this.props.login[index].eventName}
                            />
                          )
                        })}
                    </List>
                    <Paper className="calendar" style={calendarStyle}>
                        Calendar
                    </Paper>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
  console.log('state.login', state.login);
    return state;
}

export default connect(mapStateToProps)(CurrentUser);
