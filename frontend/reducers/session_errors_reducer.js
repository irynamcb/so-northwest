import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER, CLEAR_SESSION_ERRORS } from '../actions/session_actions';


const nullErrors = [];

const sessionErrorsReducer = (state = nullErrors, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ERRORS:
            return action.errors;
        case RECEIVE_CURRENT_USER:
            return nullErrors;
        case CLEAR_SESSION_ERRORS:
            return nullErrors;
        default:
            return state;
    }
};

export default sessionErrorsReducer;