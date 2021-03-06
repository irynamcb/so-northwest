import { combineReducers } from 'redux';

import entities from './entities_reducer';
import modal from '../components/modal/modal_slice';
import session from './session_reducer';
import errors from './errors_reducer';

const rootReducer = combineReducers({
    entities,
    session,
    errors,
    modal
});

export default rootReducer;