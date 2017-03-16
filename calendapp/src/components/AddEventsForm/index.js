import React, {Component} from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import {orange500, blue500} from 'material-ui/styles/colors';

const styles = {
  errorStyle: {
    marginLeft: '12',
    color: orange500,
  },
  underlineStyle: {
    marginLeft: '12',
    borderColor: orange500,
  },
  floatingLabelStyle: {
    marginLeft: '12',
    color: orange500,
  },
  floatingLabelFocusStyle: {
    marginLeft: '12',
    color: blue500,
  },
};

class AddEventsForm extends Component {
    render() {
        return(
            <div>
              <TextField
                hintText="Enter here"
                errorText="This field is required."
                floatingLabelText="EventName"
                hintStyle={styles.errorStyle}
                floatingLabelStyle={styles.floatingLabelStyle}
              /><br />

              <TextField
                hintText="Enter here"
                errorText="This field is required."
                floatingLabelText="Date"
                hintStyle={styles.errorStyle}
                floatingLabelStyle={styles.floatingLabelStyle}
              /><br />

              <TextField
                hintText="Enter here"
                errorText="This field is required."
                floatingLabelText="Time"
                hintStyle={styles.errorStyle}
                floatingLabelStyle={styles.floatingLabelStyle}
              /><br />

              <TextField
                hintText="Enter here"
                floatingLabelText="Description"
                errorStyle={styles.errorStyle}
                floatingLabelStyle={styles.floatingLabelStyle}
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
              /><br />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(AddEventsForm);
