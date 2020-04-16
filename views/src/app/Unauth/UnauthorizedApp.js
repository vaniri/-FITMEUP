import React from 'react';
import { BrowserRouter as Router, Switch, Route, useParams } from 'react-router-dom';
import NavBar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import LogRegForms from './pages/LogRes/LogReg'
import PostWithComments from '../Auth/pages/postWithComments/postWithComm'

function UnauthorizedApp ({ loginHandler }) {
    let PostWithCommentsProx = () => {
        let { postItem } = useParams();
        return (
            <PostWithComments postItem={postItem} />
        )

    }

    return (
        <Router>
            <div>
                <NavBar />
                <Switch>
                    <Route path="/logIn">
                        <LogRegForms loginHandler={loginHandler} />
                    </Route>
                    <Route path="/postWithComments/:postItem">
                        <PostWithCommentsProx />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default UnauthorizedApp;