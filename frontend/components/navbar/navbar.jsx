import React from 'react';
import { Link } from 'react-router-dom';


export default class Navbar extends React.Component {

    constructor(props) {
        super(props);
    }

    sessionLinks() {
        return (
            <div className="navbar">
                <nav className="login-signup">
                    <Link to="/" className="home">So_Northwest</Link>
                    <div className="nav-content">
                        <div className="signup-button">
                            <Link to="/login" className="signup-btn">Sign In</Link>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }

    personalGreeting() {

        return (
            <div className="navbar">
                <div className="header-group">
                    <Link to="/" className="home">So_Northwest</Link>
                    <SearchContainer />
                    <div className="nav-content">
                        <div className="header-name"><Link to='/'>Hi, {this.props.currentUser.firstName} {this.props.currentUser.lastName}!</Link></div>
                        <div className="nav">
                            <button className="header-button" onClick={this.props.logout}>Log Out</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    render() {

        if (this.props.currentUser) {
            return this.personalGreeting();
        }  else {
            return this.sessionLinks();
        }
    }
};