import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CompLinks extends Component{
    render() {
        return(
            <div className="links">
                <Link to="/" className="app-Link"> Inbox </Link>
                <Link to="/sentFolder" className="app-Link"> Sent Emails </Link>
                <Link to="/archive" className="app-Link"> Archived Emails</Link>
            </div>
        );
    }
}
export default CompLinks;