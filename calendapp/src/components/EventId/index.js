import React, { Component } from 'react';
import { connect } from 'react-redux';

import ParticipantList from '../Participants';
import {Content} from './constants.js';

import './index.css';

class EventId extends Component {
    render () {
        return(
            <div className="EventCard">
                <div className="Party-header">
                    <h1> {this.props.events[parseInt(this.props.routeParams.eventId, 10)].eventName +", "+ this.props.events[parseInt(this.props.routeParams.eventId, 10)].location.city} </h1>
                    <h3> {this.props.events[parseInt(this.props.routeParams.eventId, 10)].date} </h3>
                </div>
                <div className="Content" style={Content} >
                    <ParticipantList routeParams={this.props.routeParams.eventId} />
                </div>
          </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(EventId);
