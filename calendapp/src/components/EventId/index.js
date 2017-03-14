import React, { Component } from 'react';
import { connect } from 'react-redux';
import {List, ListItem} from 'material-ui/List';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';


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

const Description = {
  width: '50%',
  height: '60vh',
  margin: '20px',
  textAlign: 'center',
}

class EventId extends Component {
    render () {
        // console.log('this.props.params.eventId ', this.props.params.eventId);
        // console.log('props inside EventId', this.props);
        return(
          <div className="EventCard">
            <div className="Party-header">
              <h1>Event: {this.props.login[this.props.params.eventId].eventName}</h1>
            </div>
            <div className="Content" style = {Content} >
              <Paper style = {PartList} zDepth={3}>
                <h3>Participants</h3>
                  <List className="participantsList">
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
              </Paper>
              <Paper style = {Description} zDepth={3}>
                <h3>Event Info</h3>
                <Card>
                  <CardMedia overlay={<CardTitle title="Overlay title" />} >
                    <img src="images/nature-600-337.jpg" />
                  </CardMedia>
                  <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                    Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                  </CardText>
                </Card>
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




//   <div className="DescriptionAndImage">
//     <Paper className="eventDescription">
//       {(this.props.login[this.props.params.eventId].description)}
//     </Paper>
//     <Paper className="eventPic" style={EventPicStyle}>
//         EventPic here
//     </Paper>
//   </div>
// </div>
