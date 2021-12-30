import React, { Fragment } from "react";
import { Link } from "react-router-dom"
import { logout } from "../actions/auth";
import { connect } from "react-redux";

const Navbar = ({ logout, isAuthenticated }) => { 
    const guestLinks = () => (
        <Fragment>
            <li class="nav-item active">
                <Link class="nav-link" to="/login">Sign In</Link>
            </li>
                
            <li class="nav-item">
                <Link class="nav-link active" to="/signup">Sign Up</Link>
            </li>
            
        </Fragment>
    );

    const authLinks = () => (
        <Fragment>
            <li class="nav-item active">
                    <a class="nav-link " href="#!" onClick={logout}>Log Out</a>
            </li>
            <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </Fragment>
    );

    return(
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div id="nav_logo">
                <img width="100px" height="100px" src="https://imgur.com/ktB5k6D" alt=""/>
            </div>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse justify-content-right" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
                </li>
                {isAuthenticated ? authLinks() : guestLinks()}
                </ul>
                
            </div>
            </nav>
        </div>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { logout })(Navbar);