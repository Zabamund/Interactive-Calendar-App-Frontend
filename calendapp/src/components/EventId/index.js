import React, { Component } from 'react';
import { connect } from 'react-redux';

import ParticipantList from '../Participants';

import './index.css';

const Content = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  alignItems: 'center',
}

const DescriptionAndImage = {
  width: '50%',
  height: '60vh',
  margin: '20px',
  textAlign: 'center',
  alignItems: 'center',
  display:'flex',
  flexDirection: 'column',
}

const EventImage = {
  maxWidth: '100%',
  maxHeight: '60%',
  paddingBottom: '5%',
}

class EventId extends Component {
    render () {
        // console.log('this.props in the EventId ', this.props);
        // console.log('this.props.routeParams ', parseInt(this.props.routeParams.eventId, 10));
        // console.log('this.props.routeParams ', this.props.routeParams.eventId);
        return(
            <div className="EventCard">
                <div className="Party-header">
                    <h1> {this.props.events.events[parseInt(this.props.routeParams.eventId, 10)].eventName +", "+ this.props.events.events[parseInt(this.props.routeParams.eventId, 10)].location.city} </h1>
                    <h3> {this.props.events.events[parseInt(this.props.routeParams.eventId, 10)].date} </h3>
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
