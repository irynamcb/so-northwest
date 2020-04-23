import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    const newState = Object.assign({}, state);
    let userId;
  
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            userId = Number(Object.keys(action.currentUser.users)[0]);
            newState[userId] = action.currentUser.users[userId];
            return newState;
        default:
            return state;
    }
};

export default usersReducer;