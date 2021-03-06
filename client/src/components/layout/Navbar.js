import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import { clearProfile } from '../../actions/profileActions';


class Navbar extends Component {

    onLogoutClick(e) {
        e.preventDefault();
        this.props.logoutUser();
        this.props.clearProfile();
        // history not defined?
        // history is defined inside Landing/Login/Register with route tag
        window.location.href = '/login';
    }

    render() {
        const { isAuthenticated, user } = this.props.auth;
        const guestLinks = (
            <ul className="navbar-nav ml-auto">
                {/* <li className="nav-item">
                    <Link className="nav-link" to="/register">Sign Up</Link>
                </li> */}
                <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                </li>
            </ul>
        );
        const authLinks = (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/feed">Post Feed</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/dashboard">Dashboard</Link>
                </li>
                <li className="nav-item">
                    <a href="" onClick={ this.onLogoutClick.bind(this) } className="nav-link">
                        {/* wierd verticle-align issue */}
                        <img src={ user.avatar } alt="" className="gravatar-image rounded-circle" title="gravatar image"/>
                        <span>Logout out</span>
                    </a>
                </li>
            </ul>
        );
        return (        
            <nav id="navbar" className="navbar navbar-expand-sm navbar-dark is-showing">
                <div className="container">
                    <Link id="nav-title" className="navbar-brand" to="/">Home</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="mobile-nav">
                        <ul className="navbar-nav mr-auto">
                            {/* <li className="nav-item">
                                <Link className="nav-link" to="/profiles"> Developers</Link>
                            </li> */}
                            <li className="nav-item">
                                <a className="nav-link" href="#main-article"> Main</a>
                            </li>
                            <li className="nav-item">
                                <Link id="" className="nav-link" to="/main/Hobby"> Hobby</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" to="#"> Article</a>
                            </li>
                        </ul>
                        { isAuthenticated ? authLinks : guestLinks }
                    </div>
                </div>
            </nav>
        );
    }
}

Navbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    clearProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser, clearProfile })(Navbar);
