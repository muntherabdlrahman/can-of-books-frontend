import React, { Component } from 'react'
import { withAuth0 } from '@auth0/auth0-react';
// import { Router } from 'react-router-dom';
import BestBooks from './BestBooks';
import Login from './Login';
import Profile from './Profile'
import LoginButton from './LoginButton';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import LoginButton from './LoginButton';

class BrowserRouter extends Component {
    render() {
        return (
            <>
            <Router>
                <Link to="/">Home</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/login">Login</Link>
            </Router>
            <Switch>
                <Route exact path='/'>
                {
                  this.props.auth0.isAuthenticated ?
                    <BestBooks />
                    : <Login />
                }
                </Route>
                <Route exact path='/profile'>
                    <Profile/>
                </Route>
                <Route to='/login'>
                    <LoginButton/>
                </Route>
            </Switch>
            </>
        )
    }
}

export default withAuth0(BrowserRouter);
