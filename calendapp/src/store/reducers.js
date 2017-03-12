import { combineReducers } from 'redux';
import { LOGIN, CURRENTUSER, ADDEVENT, EVENTID, USERID, REGISTERUSER } from './actions';

// one reducer per component
function loginReducer(state = {}, action) {
    switch (action.type) {
        case LOGIN:
            // return action.data;
            return state;
        default:
            return state;
    }
}

function currentUserReducer(state = {}, action) {
    switch (action.type) {
        case CURRENTUSER:
            return state;
        default:
            return state;
    }
}

function addEventReducer(state = {}, action) {
    switch (action.type) {
        case ADDEVENT:
            return state;
        default:
            return state;
    }
}

function eventIdReducer(state = {}, action) {
    switch (action.type) {
        case EVENTID:
            return state;
        default:
            return state;
    }
}

function userIdReducer(state = {}, action) {
    switch (action.type) {
        case USERID:
            return state;
        default:
            return state;
    }
}

function registerUserReducer(state = {}, action) {
    switch (action.type) {
        case REGISTERUSER:
            return state;
        default:
            return state;
    }
}

// combine all reducers into one and export that single one
const reducer = combineReducers({
    login: loginReducer,
    currentUser: currentUserReducer,
    addEvent: addEventReducer,
    eventId: eventIdReducer,
    userId: userIdReducer,
    registerUser: registerUserReducer,
});

export default reducer;
