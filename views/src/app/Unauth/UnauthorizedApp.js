import React from 'react';
import { BrowserRouter as Router, Switch, Route, useParams } from 'react-router-dom';
import NavBar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import AllPosts from './pages/home/AllPosts'
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
                    <Route path="/posts">
                        <AllPosts />
                    </Route>
                    <Route path="/postWithComments/:postItem">
                        <PostWithCommentsProx />
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