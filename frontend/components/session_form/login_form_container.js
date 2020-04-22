import { connect } from 'react-redux';
import React from 'react';
import { login, clearSessionErrors } from '../../actions/session_actions';
import LoginForm from './login_form';


const mSTP = ({ errors }) => {
    return {
        errors: errors.session,
    };
};

const mDTP = dispatch => {
    return {
        login: (user) => dispatch(login(user)),
        clearErrors: () => dispatch(clearSessionErrors())
    };
};

export default connect(mSTP, mDTP)(LoginForm);