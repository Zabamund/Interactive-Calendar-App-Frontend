import React, { Component } from 'react';
import { connect } from 'react-redux';
import {List, ListItem} from 'material-ui/List';
import Paper from 'material-ui/Paper';
import {RaisedButton} from 'material-ui/RaisedButton';


import './index.css';

const eventsList = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center'
};

const EventPicStyle = {
  height: '60vh',
  width: '60%',
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

// <h3>Event: {this.props.login[this.props.params.eventId-1].eventName}</h3>
//   this.props.login[this.props.params.eventId-1].participants.map((participant, index) => {
//     return (
//       <ListItem
//         key={index}
//         primaryText={participant.name}
//       />
//     )
//   })

class EventId extends Component {
    render () {
        // console.log('this.props.params.eventId ', this.props.params.eventId);
        // console.log('props inside EventId', this.props);
        return(
          <div className="Participants">
            <div className="Party-header">
              <h1>Event: {this.props.login[this.props.params.eventId].eventName}</h1>
              <h2>Participants</h2>{/*add actual userName with this.props.currentUser.firstName*/}
            </div>
            <div className="participantsList">
              <List className="participantsList" style = {eventsList}>
                {(this.props.login[this.props.params.eventId].participants)
                    .map((participant, index) => {
                    console.log(participant.name);
                    return(
                      <ListItem
                        key={index}
                        primaryText={participant.name}
                      />
                    )
                    })
                }
              </List>
              <div className="DescriptionAndImage">
                <Paper className="eventDescription">
                  {(this.props.login[this.props.params.eventId].description)}
                </Paper>
                <Paper className="eventPic" style={EventPicStyle}>
                    EventPic here
                </Paper>
              </div>
            </div>
          </div>
        );

    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(EventId);
