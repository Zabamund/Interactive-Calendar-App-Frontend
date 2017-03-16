import { combineReducers } from 'redux';
import { LOGIN, EVENTID, USERID, CURRENTUSER } from './actions';
import { defaultState } from './constants.js'

// one reducer per property of the Redux State
function currentUserReducer(state = {}, action) {
    switch (action.type) {
        case LOGIN:
        let newState = Object.assign({}, state, action.data);
        newState.token = action.data.token;
        console.log('NEWSTATE', newState)
            return newState;
        case CURRENTUSER:
            // return token
            // current user object
            return state;
        default:
            return state;
    }
}

function eventsReducer(state = []/*{}*/, action) { // defaultState ONLY used during development
    switch (action.type) {
        case EVENTID:
            // return token
            // return event(id) object
            let newState = state;
            action.data.forEach( function(eventsObject) {
                newState.push(eventsObject);
            });
            // let newState = Object.assign({}, action.data);
            console.log('newState of Events is', newState);
            return newState;
        default:
            return state;
    }
}

function usersReducer(state = [], action) {
    switch (action.type) {
        case USERID:
            //token
            // UserID object
            let newState = Object.assign({}, action.data);
            return newState;
        default:
            return state;
    }
}

// combine all reducers into one and export that single one
const reducer = combineReducers({
    currentUser: currentUserReducer,
    events: eventsReducer,
    users: usersReducer
});

export default reducer;
