import { combineReducers } from 'redux';
import { LOGIN, EVENTID, USERID, CURRENTUSER } from './actions';
import { defaultState } from './constants.js'

// one reducer per property of the Redux State
function currentUserReducer(state = defaultState, action) {
    switch (action.type) {
        case LOGIN:
            // must fetch and return token and user current user object
            // console.log('defaultState ', state);
            // console.log('action ', action);
            return state;
        case CURRENTUSER:
            // return token
            // current user object
        default:
            return state;
    }
}

function eventsReducer(state = defaultState, action) {
    switch (action.type) {
        case EVENTID:
            // return token
            // return event(id) object
            return state;
        default:
            return state;
    }
}

function usersReducer(state = defaultState, action) {
    switch (action.type) {
        case USERID:
            //token
            // UserID object
            return state;
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
