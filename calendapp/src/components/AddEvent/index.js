import React, { Component } from 'react';
import { connect } from 'react-redux';

import RaisedButton from 'material-ui/RaisedButton';

import { fetchEventData } from '../../store/actions.js'

const style = { margin: 12 };

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
                console.log('data received');
            })
    }

    render () {
        return (
            <div className="AddEvent">
                <h3>Add event</h3>
                {/* // add fetch button to test the API on local */}
                 <RaisedButton onClick={this.fetchEvent} label="Fetch event1 from API" style={style} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(AddEvent);
