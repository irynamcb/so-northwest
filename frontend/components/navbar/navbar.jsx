import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTree, faSignInAlt, faDolly} from '@fortawesome/free-solid-svg-icons'


export default class Navbar extends React.Component {

    constructor(props) {
        super(props);
    }

    sessionLinks() {
        const logo = <FontAwesomeIcon icon={faTree} size="1x"  pull="left" inverse transform="shrink-4" />
        const icon = <FontAwesomeIcon icon={faSignInAlt} size="1x"  pull="left" inverse transform="shrink-4" />
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
        const logo = <FontAwesomeIcon icon={faTree} size="1x" pull="left" inverse transform="shrink-4" />
        const cart = <FontAwesomeIcon icon={faDolly} size="1x" inverse transform="shrink-4" />
        let numItems = Object.keys(this.props.items).length;
        return (
       
            <div className="navbar">
                <div className="header-group">
                    <Link to="/" className="home">{logo}So_Northwest</Link>
                    <div className="nav-content">
                        <div className="header-name"><Link to='/'>Hi, {this.props.currentUser.firstName} {this.props.currentUser.lastName}!</Link></div>
                        <div><Link to="/shoppingCart" className="home">Cart{cart}<span style={{color: 'lime'}}>{numItems}</span></Link></div>
                        <div><Link to="/" className="home">Purchase history</Link></div>
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