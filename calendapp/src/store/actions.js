// actions
export const LOGIN = 'login';
export const CURRENTUSER = 'currentUser';
export const ADDEVENT = 'addEvent';
export const EVENTID = 'eventId';
export const USERID = 'userId';
export const REGISTERUSER = 'registerUser';

// action creators
export const login = (loginUser) => { // action Creator
    return (dispatch) => { // returns a function which IS the action

        const myHeaders = new Headers({
            'Content-Type': 'application/json'
        });

        const config = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(loginUser)
        }

        // on fetch we are using 'return' in order to return a promise which is passed to the 'caller'
        // this is so that the caller can wait for this return BEFORE completing any further actions
        // for example:
        /*
        this.props.dispatch(logonAction)
            .then(() => {
                this.setState({
                    username:'',
                    password:''
                });
                this.props.router.push('/users/currentUser')
            })
        */

        return fetch('https://propulsion-blitz.herokuapp.com/api/login', config) // need the login api url
            .then(data => data.json())
            .then(currentUserObj => {
                if (currentUserObj.token) {
                    console.log('login successful');
                    console.log(currentUserObj);
                } else {
                    console.log('the email and password combination was wrong');
                }
                dispatch({
                    type: LOGIN,
                    data: currentUserObj
                })
            });
    }
}
