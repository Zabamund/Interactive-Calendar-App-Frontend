import React, {Component} from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import {orange500, blue500} from 'material-ui/styles/colors';
import {RaisedButton} from 'material-ui';
//DropDown
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

import { addEvent } from '../../store/actions.js'
import DatePicker from 'material-ui/DatePicker';

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

const dropDownStyles = {
  customWidth: {
    width: 300,
  },
};

class AddEventsForm extends Component {
    constructor(props) {
        super(props);

        //attempt to re-create format given in the API
        this.state = {
            id: '', //set when saving in DB
            eventName: 'New Event', //default
            date: '2017,12,31', //default
            time: ['0,0'], //default
            description: 'Lets have some fun!', //default
            creator: this.props.currentUser, //must be the current user :)
            participants: [this.props.currentUser], //default
            location: 'secret', //default //should be an object.
            open: 'false', //default //improve button label!
            image: 'http://www.citi.io/wp-content/uploads/2015/08/1168-00-06.jpg', //default
        };
    }


    submitNewEventData = (event) => {
        event.preventDefault();
        const addEventAction = addEvent(this.state); //store/action.js
        //continue here! addEventAction is assigned a value but never use
    }


    eventNameInput = (event) => {
        this.setState({
            eventName:event.currentTarget.value,
        })
    };

    dateInput = (event, date) => { //event is always null, OK

        this.setState({
            date: date,
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


    openBooleanInput = (event, index, value) => {
        if(value==1) {
            this.setState(
                {open: true}
            )
        }
        if(value==2) {
            this.setState(
                {open: false}
            )
        }
    };

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
                  <DatePicker hintText="Enter Event Date" container="inline" onChange={this.dateInput}/>

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
                  <DropDownMenu value={this.state.value} onChange={this.openBooleanInput} style={dropDownStyles}>
                    <MenuItem value={1} primaryText="open"  label="Open Event?"/>
                    <MenuItem value={2} primaryText="private"  label="Open Event?" />
                  </DropDownMenu>

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
