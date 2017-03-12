import React, { Component } from 'react';

class RegisterForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            street: '',
            streetNb: 0,
            postCode: '',
            city: '',
            country: '',
            // latitude: '',
            // longitude: '',
            email: '',
            password: ''
        }
    }

    render () {
        return (
            <div className="RegisterForm">
                <h3>Register form</h3>
            </div>
        )
    }
}

export default RegisterForm;
