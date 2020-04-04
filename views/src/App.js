import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './components/navbar/Navbar';
import Profile from './pages/Profile/Profile';
import Home from './pages/home/Home';

function App() {
    return (
        <Router>
            <div>
                <Nav />
                <Switch>
                    <Route path="/profile">
                        <Profile />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App;