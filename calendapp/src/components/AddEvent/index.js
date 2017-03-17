import React, { Component } from 'react';
import { connect } from 'react-redux';
// import reduxForm from './MaterialUiForm.js';
import { Paper } from 'material-ui';

import AddEventsForm from '../AddEventsForm';

const EventsFormTitle = {

}

const EventsFormStyle = {
    height: '80vh',
    width: '80%',
}

const FormBox = {
    display: 'flex',
    // alignItems: 'center',
    justifyContent: 'space-around',
}


class AddEvent extends Component {

    render () {
        return (
            <div>
                <div style={EventsFormTitle} className="App-header">
                    <h2>Add New Event</h2>
                </div>
                <div style={FormBox}>
                    <Paper style={EventsFormStyle} zDepth={3}>
                        <AddEventsForm/>
                        {/*<reduxForm />*/}
                    </Paper>
                </div>
            </div>
        )
    };
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(AddEvent);

// export default connect()(AddEvent);
