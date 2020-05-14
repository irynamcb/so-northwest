import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTree, faSignInAlt, faDolly } from '@fortawesome/free-solid-svg-icons';


export default class Navbar extends React.Component {

    constructor(props) {
        super(props);
    }

    sessionLinks() {
        const logo = <FontAwesomeIcon icon={faTree} size="lg"  pull="left" inverse transform="shrink-4" />
        const icon = <FontAwesomeIcon icon={faSignInAlt} size="lg"  pull="left" inverse transform="shrink-4" />
        return (
            <div className="navbar">
                <nav className="header-group">
                    <Link to="/" className="home">{logo}&nbsp;So_Northwest</Link>
                    <div className="nav-content">
                        <div className="signup-button">
                            <Link to="/login" className="signup-btn">{icon}&nbsp;Sign In</Link>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }


    personalGreeting() {
        const logo = <FontAwesomeIcon icon={faTree} size="lg" pull="left" inverse transform="shrink-4" />
        const cart = <FontAwesomeIcon icon={faDolly} size="lg" inverse transform="shrink-4" />
       
        return (
       
            <div className="navbar">
                <div className="header-group">
                    <Link to="/" className="home">{logo}So_Northwest</Link>
                    <div className="nav-content">
                        <div className="header-name"><Link to='/'>Hi, {this.props.currentUser.firstName} {this.props.currentUser.lastName}!</Link></div>
                        <div><Link to="/shoppingCart" className="home">Cart {cart}<span style={{color: 'green'}}>{this.props.items}</span></Link></div>
                        <div><Link to="/" className="home">Purchase history</Link></div>
                        <div className="nav">
                            <button className="header-button" onClick={this.props.logout}>Sign out</button>
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