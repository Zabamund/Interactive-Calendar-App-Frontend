import React, { Component } from 'react';
import { connect } from 'react-redux';

class EventId extends Component {

    render () {
        // console.log('this.props.params.eventId ', this.props.params.eventId);
        console.log('props inside EventId', this.props.params.eventId);
        return (
            <div className="EventId">
                <h3>Event number {this.props.params.eventId}</h3>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(EventId);
