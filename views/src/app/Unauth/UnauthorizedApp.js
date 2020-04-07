import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/navbar/Navbar';
import Home from './pages/home/Home';

function UnauthorizedApp ({ loginHandler }) {
    return (
        <Router>
            <div>
                <Nav />
                <Switch>
                    <Route path="/posts">
                    </Route>
                    <Route path="/">
                        <Home loginHandler={loginHandler} />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default UnauthorizedApp;