import React, {Component} from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import {orange500, blue500} from 'material-ui/styles/colors';

const styles = {
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
    color: orange500,
  },
  floatingLabelFocusStyle: {
    marginLeft: 12,
    color: blue500,
  },
};

class AddEventsForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eventName: '',
            date: '',
            time: '',
            description: '',
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

    render() {
        return(
            <div>
              <TextField
                hintText="Enter here"
                errorText="This field is required."
                floatingLabelText="EventName"
                hintStyle={styles.errorStyle}
                floatingLabelStyle={styles.floatingLabelStyle}
                onChange = {this.eventNameInput}
              /><br />

              <TextField
                hintText="Enter here"
                errorText="This field is required."
                floatingLabelText="Date"
                hintStyle={styles.errorStyle}
                floatingLabelStyle={styles.floatingLabelStyle}
                onChange = {this.dateInput}
              /><br/>

              <TextField
                hintText="Enter here"
                errorText="This field is required."
                floatingLabelText="Time"
                hintStyle={styles.errorStyle}
                floatingLabelStyle={styles.floatingLabelStyle}
                onChange = {this.timeInput}
              /><br />

              <TextField
                hintText="Enter here"
                floatingLabelText="Description"
                errorStyle={styles.errorStyle}
                floatingLabelStyle={styles.floatingLabelStyle}
                onChange = {this.descriptionInput}
              /><br />

              <TextField
                hintText="Enter here"
                floatingLabelText="Location"
                floatingLabelStyle={styles.floatingLabelStyle}

              /><br />
              <TextField
                hintText="Enter here"
                floatingLabelText="open (true / false)"
                floatingLabelStyle={styles.floatingLabelStyle}
                onChange = {this.openBooleanInput}
              /><br />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(AddEventsForm);
