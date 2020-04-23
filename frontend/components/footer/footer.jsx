import React from 'react';
import { Link } from 'react-router-dom';


export default class Footer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="footer">
                <div className="footer-group">
            <div>
                Phone
            </div>
            <div>
                Email
            </div>
            <div>
                Github
            </div>
            <div>
                LinkedIn
            </div>
                </div>
            </div>
        )

    }
}