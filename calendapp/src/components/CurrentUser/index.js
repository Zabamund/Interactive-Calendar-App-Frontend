import React, { Component } from 'react';

class CurrentUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    render() {
        return (
            <div className="CurrentUser">
                <h3>Current User</h3>
            </div>
        )
    }
}

export default CurrentUser;
