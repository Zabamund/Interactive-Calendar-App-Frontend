import React, { Component } from 'react';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';

const PartList = {
  width: '30%',
  height: '60vh',
  margin: '20px',
  textAlign: 'center',
}

class ParticipantList extends Component {
    render() {
        console.log('this.props ', this.props);
        return(
            <Paper style={PartList} zDepth={3}>
                <h3>Participants</h3>
                <List className="participantsList">
                    {(this.props.events.events[this.props.routeParams].participants)
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

        )
    }
}

const mapStateToProps = (state) => {
    return state;
}
export default connect(mapStateToProps)(ParticipantList);
