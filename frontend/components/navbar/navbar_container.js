import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logout } from '../../actions/session_actions';
import Navbar from './navbar';

const mSTP = ({ session, entities: { users, cart } }, ownProps) => {
    return {
        currentUser: users[session.id],
        items: Object.keys(cart.items).length

    };
};

const mDTP = dispatch => ({
    logout: () => dispatch(logout())
});

export default withRouter(connect(
    mSTP,
    mDTP
)(Navbar));