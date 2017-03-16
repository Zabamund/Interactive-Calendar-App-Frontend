import React, {Component} from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import {orange500, blue500} from 'material-ui/styles/colors';
import {RaisedButton} from 'material-ui';

import { addEvent } from '../../store/actions.js'

const styles={
  errorStyle: {
    marginLeft: 12,
    color: orange500,
  },
  underlineStyle: {
    marginLeft: 12,
    borderColor: orange500,
  },
  floatingLabelStyle: {
    marginLeft: 12,
    color: 'dark-blue',
  },
  floatingLabelFocusStyle: {
    marginLeft: 12,
    color: blue500,
  },
};

class AddEventsForm extends Component {
    constructor(props) {
        super(props);

        //attempt to re-create format given in the API
        this.state = {
            id: '', //set when saving in DB
            eventName: '',
            date: '',
            time: '',
            description: '',
            image: '', //not set here
            creator:'', //not set here
            participants:'', //not set here
            location: '',
            open: '',
        };
    }

    eventNameInput = (event) => {
        this.setState({
            eventName:event.currentTarget.value
        })
    };

    dateInput = (event) => {
        this.setState({
            date:event.currentTarget.value
        })
    };

    timeInput = (event) => {
        this.setState({
            time:event.currentTarget.value
        })
    };

    descriptionInput = (event) => {
        this.setState({
            description:event.currentTarget.value
        })
    };

    locationInput = (event) => {
        this.setState({
            location:event.currentTarget.value
        })
    };

    openBooleanInput = (event) => {
        this.setState({
            open:event.currentTarget.value
        })
    };

    submitNewEventData = (event) => {
        console.log('in da submit');
        event.preventDefault();
        const addEventAction = addEvent(this.state);
    }

    render() {
        return(
            <div>
                <form onSubmit={this.submitNewEventData}>

                {/*Event Name*/}
                  <TextField
                    hintText="Enter here"
                    errorText="This field is required."
                    floatingLabelText="EventName"
                    hintStyle={styles.errorStyle}
                    floatingLabelStyle={styles.floatingLabelStyle}
                    onChange={this.eventNameInput}
                  /><br />

                  {/*Date*/}
                  <TextField
                    hintText="Enter here"
                    errorText="This field is required."
                    floatingLabelText="Date"
                    hintStyle={styles.errorStyle}
                    floatingLabelStyle={styles.floatingLabelStyle}
                    onChange={this.dateInput}
                  /><br/>

                  {/*Time*/}
                  <TextField
                    hintText="Enter here"
                    errorText="This field is required."
                    floatingLabelText="Time"
                    hintStyle={styles.errorStyle}
                    floatingLabelStyle={styles.floatingLabelStyle}
                    onChange={this.timeInput}
                  /><br />

                  {/*Description*/}
                  <TextField
                    hintText="Enter here"
                    floatingLabelText="Description"
                    errorStyle={styles.errorStyle}
                    floatingLabelStyle={styles.floatingLabelStyle}
                    onChange={this.descriptionInput}
                  /><br />

                  {/*Location*/}
                  <TextField
                    hintText="Enter here"
                    errorText="This field is required."
                    floatingLabelText="Location"
                    floatingLabelStyle={styles.floatingLabelStyle}
                  /><br />

                  {/*Open / closed (boolean)*/}
                  <TextField
                    hintText="Enter here"
                    floatingLabelText="open (true / false)"
                    floatingLabelStyle={styles.floatingLabelStyle}
                    onChange={this.openBooleanInput}
                  /><br />

                  {/*SUBMIT BUTTON*/}
                  <RaisedButton label="Submit (Add Event)" type="submit"/>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(AddEventsForm);
