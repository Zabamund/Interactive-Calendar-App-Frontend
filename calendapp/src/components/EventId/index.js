import React, { Component } from 'react';
import { connect } from 'react-redux';
import {List, ListItem} from 'material-ui/List';
import Paper from 'material-ui/Paper';


import './index.css';

const Content = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  alignItems: 'center',
}

const PartList = {
  width: '30%',
  height: '60vh',
  margin: '20px',
  textAlign: 'center',
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

        return(
          <div className="EventCard">
            <div className="Party-header">
              <h1> {this.props.events.events[this.props.params.eventId].eventName +", "+ this.props.events.events[this.props.params.eventId].location.city} </h1>
              <h3> {this.props.events.events[this.props.params.eventId].date} </h3>
            </div>
            <div className="Content" style={Content} >
              <Paper style={PartList} zDepth={3}>
                <h3>Participants</h3>
                  <List className="participantsList">
                    {(this.props.events.events[this.props.params.eventId].participants)
                        .map((participant, index) => {
                        return(
                          <ListItem
                            key={index}
                            primaryText={participant.name}
                          />
                        )
                        })
                    }
                  </List>
              </Paper>
              <Paper style={DescriptionAndImage} zDepth={3}>
                <h3>{this.props.events.events[this.props.params.eventId].eventName}</h3>
                <img src="http://www.samuitimes.com/wp-content/uploads/2014/10/beach-party-ban.jpg" alt="missingFile" style={EventImage}/>
              <Paper zDepth={1}> {this.props.events.events[this.props.params.eventId].description} </Paper>
              </Paper>
            </div>
          </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(EventId);
