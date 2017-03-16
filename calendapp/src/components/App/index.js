import React, { Component } from 'react';
import { connect } from 'react-redux';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import { login } from '../../store/actions.js';
import { fetchAllEventData } from '../../store/actions.js';
import { fetchEventDataByUser } from '../../store/actions.js';


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
    };

    passwordInput = (event) => {
        this.setState({
            password:event.currentTarget.value
        })
    };

    submitLoginData = (event) => {
        event.preventDefault();
        const logonAction = login(this.state);
        this.props.dispatch(logonAction)
            .then(() => {
                this.setState({ //clear component state
                    email:'',
                    password:'',
                });
            })
            .then(() => {
                const idOfCurrentUser = 1/*this.props.currentUser._id[0]*/; //for now, take first digit of first user, until real fetch is done
                const getEventDataAction = /*fetchAllEventData*/fetchEventDataByUser(idOfCurrentUser);
                this.props.dispatch(getEventDataAction);
            })
            .then(() => { //work with the redux state (this.props.<stateElement>)
                if (this.props.currentUser.token) {
                    this.props.router.push('/users/currentUser')
                } else {
                    alert('your login attempt failed');
                }
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
                <form onSubmit={this.submitLoginData}>
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
