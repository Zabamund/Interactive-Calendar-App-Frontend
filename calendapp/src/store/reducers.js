import { combineReducers } from 'redux';
import { LOGIN, CURRENTUSER, ADDEVENT, EVENTID, USERID, REGISTERUSER } from './actions';
import { defaultState } from './constants.js'

// one reducer per property of the Redux State
function currentUserReducer(state = defaultState, action) {
    switch (action.type) {
        case LOGIN:
        console.log('defaultState ', state);
            // return action.data;
            return state;
        default:
            return state;
    }
}

function eventsReducer(state = defaultState, action) {
    switch (action.type) {
        case EVENTID:
            return state;
        default:
            return state;
    }
}

function usersReducer(state = defaultState, action) {
    switch (action.type) {
        case EVENTID:
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
