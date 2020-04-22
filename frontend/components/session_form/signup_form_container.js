import { connect } from 'react-redux';
import React from 'react';
import { signup, clearSessionErrors } from '../../actions/session_actions';
import SignupForm from './signup_form';
import { withRouter } from 'react-router-dom';


const mSTP = ({ errors, ownProps }) => {
    return {
        errors: errors.session,
    };
};

const mDTP = dispatch => {
    return {
        signup: (user) => dispatch(signup(user)),
        clearErrors: () => dispatch(clearSessionErrors())
    };
};

export default withRouter(connect(mSTP, mDTP)(SignupForm));