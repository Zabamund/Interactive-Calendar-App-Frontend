import { combineReducers } from 'redux';
import { LOGIN, CURRENTUSER, ADDEVENT, EVENTID, USERID, REGISTERUSER } from './actions';

const defaultEvents = [
    {
        eventId: 123,
        eventName: "Block Party",
        creator: "John Doe",
        date: '2017-03-15',
        time: '21:06:42.510',
        description: "BYOB block party",
        participants: [{name: "John Doe"}, {name: "Jane Doe"}],
        location: {locationId: 123},
        open: false
    },
    {
        eventId: 124,
        eventName: "Lan Party",
        creator: "John Doe",
        date: '2017-03-16',
        time: '21:06:42.510',
        description: "Gaming all night long until morning,Gaming all night long until morning,Gaming all night long until morning,Gaming all night long until morning,Gaming all night long until morning ",
        participants: [{name: "John Doe"}, {name: "Jane Doe"}],
        location: {locationId: 123},
        open: false
    },
    {
        eventId: 125,
        eventName: "Beach Party",
        creator: "John Doe",
        date: '2017-03-17',
        time: '21:06:42.510',
        description: "A relaxed party on the beach",
        participants: [{name: "John Doe"}, {name: "Jane Doe"}],
        location: {locationId: 123},
        open: false
    }
]

// one reducer per component
function loginReducer(state = defaultEvents, action) {
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
