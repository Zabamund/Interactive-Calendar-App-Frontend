// actions
export const LOGIN = 'login';
export const FETCHALLEVENTS = 'fetchAllEvents';
export const FETCHEVENTSFORUSER = 'fetchEventsForUser';

export const USERID = 'userId';
export const CURRENTUSER = 'currentUser';

// export const ADDEVENT = 'addEvent';
// export const REGISTERUSER = 'registerUser';

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

        //post request to get back user data
        return fetch('https://propulsion-blitz.herokuapp.com/api/login', config) // need the login api url
        .then(data => data.json())
        .then(currentUserObj => {
            if (currentUserObj.token) {
                console.log('login successful');
            } else {
                console.log('the email and password combination was wrong');
            }
            dispatch({ //now, dispatch to Redux state
                type: LOGIN,
                data: currentUserObj //in the API, not just user but entire data.
            })
        });
    }
}


export const fetchEventDataByUser = () => { // action Creator will eventually need to receive the token for authentication
    return(dispatch) => { // returns a function with IS the action

        // place to later add the token authorisation
        return fetch('http://localhost:8080/events/')
            .then(data => data.json())
            .then(allEventsArray => {
                console.log('all Events', allEventsArray);            
                dispatch({
                    type: FETCHEVENTSFORUSER,
                    data: allEventsArray,
                })
            });
    }
}



export const fetchAllEventData = () => { // action Creator will eventually need to receive the token for authentication
    return(dispatch) => { // returns a function with IS the action

        // place to later add the token authorisation
        return fetch('http://localhost:8080/events/')
            .then(data => data.json())
            .then(allEventsArray => {
                console.log('all Events', allEventsArray);
                dispatch({
                    type: FETCHALLEVENTS,
                    data: allEventsArray,
                })
            });
    }
}

//fetching a user by ID
// export const fetchUserDataById = (userID) => {
//     return(dispatch) => {
//         return fetch('http://localhost:8080/users/'+userID)
//             .then(data => data.json())
//             .then(currentUserObj => {
//                 console.log('currentUser', currentUserObj);
//                 dispatch({
//                     type: USERID,
//                     data: currentUserObj,
//                 })
//             });
//     }
// }
