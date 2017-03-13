import React, { Component } from 'react';
import { connect } from 'react-redux';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import { login } from '../../store/actions.js';

import './index.css';

const style = { margin: 12 };

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    emailInput = (event) => {
        this.setState({
            email:event.currentTarget.value
        })
        console.log(this.state);
    };

    passwordInput = (event) => {
        this.setState({
            password:event.currentTarget.value
        })
        console.log(this.state);
    };

    logonForm = (event) => {
        event.preventDefault();
        const logonAction = login(this.state);
        this.props.dispatch(logonAction)
            .then(() => {
                this.setState({
                    email:'',
                    password:''
                });
                //add if-statement to check token - right now, redirected anyway
                this.props.router.push('/users/currentUser')
            })
    };

    registerForm = (event) => {
        event.preventDefault();
        this.props.router.push('/users/registerForm')
    }


    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h2>Welcome to Calendapp</h2>
                </div>
                <form onSubmit={this.logonForm}>
                    <div className="textFields">
                        <TextField value={this.state.email} onChange={this.emailInput} floatingLabelText="Email"/>
                        <TextField value={this.state.password} onChange={this.passwordInput} floatingLabelText="Password" type="password"/>
                    </div>
                    <div className="submitButtons">
                        <RaisedButton label="Login" style={style} type="submit" />
                    </div>
                </form>
                <form onSubmit={this.registerForm}>
                    <RaisedButton label="Register" style={style} type="submit" />
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(App);
