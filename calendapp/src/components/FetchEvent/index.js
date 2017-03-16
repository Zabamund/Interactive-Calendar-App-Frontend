// place holder component for fetch event code

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Paper} from 'material-ui';

import RaisedButton from 'material-ui/RaisedButton';

import { fetchEventData } from '../../store/actions.js'

const style = {
    margin: 12,
    };

//temporarily as component to experiment with API
class AddEvent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: null,
            eventName: '',
            date: [],
            time: [],
            description: '',
            location: {},
            open: false
        }
    }

    fetchEvent = (event) => {
        event.preventDefault();
        const eventX = fetchEventData(this.state); // eventually we will need to pass the token
        this.props.dispatch(eventX)
            .then(() => {
                this.render();
                console.log('this.props ', this.props);
            })
    }




    render () {
        console.log('description ', this.props.events.description);
        console.log('eventName ', this.props.events.eventName);
        return (
            <div className="AddEvent">
                <h3>Add event</h3>
                {/* // add fetch button to test the API on local */}
                <RaisedButton onClick={this.fetchEvent} label="Fetch event1 from API" style={style} />

                <div>
                    <Paper zDepth={3}>
                        {this.props.events.description}
                        {this.props.events.eventName}
                    </Paper>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(AddEvent);
