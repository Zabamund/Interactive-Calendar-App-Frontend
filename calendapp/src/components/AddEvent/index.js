import React, { Component } from 'react';
import { connect } from 'react-redux';
// import reduxForm from './MaterialUiForm.js';

class AddEvent extends Component {

    render () {
        console.log('this.props ', this.props);
        return (
            <div>
                <p> boo ! </p>
                {/*<reduxForm />*/}
            </div>
        )
    };
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(AddEvent);

// export default connect()(AddEvent);
