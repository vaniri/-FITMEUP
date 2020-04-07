import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './components/navbar/Navbar';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import PostEditor from './pages/posteditor';

function AuthorizedApp({ logoutHandler }) {
    return (
        <Router>
            <div>
                <Nav logoutHandler={logoutHandler} />
                <Switch>
                    <Route path="/profile">
                        <Profile />
                    </Route>
                    <Route path="/newpost">
                        <PostEditor />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default AuthorizedApp;