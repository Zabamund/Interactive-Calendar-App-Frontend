import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

const styleRaisedButton = { margin: 12 };
const stylePaper = {
  height: 100,
  width: 100,
  margin: 20,
  textAlign: 'center',
};

class CurrentUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
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
                <div className="App-header">
                    <h2>Current User</h2>
                </div>
                <div className="headerBar">
                    <RaisedButton onClick={this.logout} label="Logout" secondary={true} style={styleRaisedButton}/>
                    <RaisedButton onClick={this.addEvent} label="Add Event" primary={true} style={styleRaisedButton}/>
                    <Paper style={stylePaper} zDepth={3}>User image ?</Paper>
                </div>
            </div>
        )
    }
}

export default CurrentUser;
