import React from 'react';
import { BrowserRouter as Router, Switch, Route, useParams } from 'react-router-dom';
import NavBar from './components/navbar/Navbar';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import PostEditor from './pages/editor/posteditor';
import PostWithComments from './pages/postWithComments/postWithComm'
import ProfileId from './pages/ProfileId/profileId';
import AllUsersPosts from './pages/allPosts';

function AuthorizedApp({ logoutHandler }) {
    let PostWithCommentsProx = () => {
        let { postItem } = useParams();
        return (
            <PostWithComments postItem={postItem} />
        )
    }

    let ProfileProx = () => {
        let { userId } = useParams();
        return (
            <ProfileId userId={userId} />
        )
    }
    
    return (
        <Router>
            <div>
                <NavBar logoutHandler={logoutHandler} />
                <Switch>
                <Route path="/profile/:userId">
                        <ProfileProx />
                    </Route>
                    <Route path="/profile">
                        <Profile />
                    </Route>
                    <Route path="/newpost">
                        <PostEditor />
                    </Route>
                    <Route path="/postWithComments/:postItem">
                        <PostWithCommentsProx />
                    </Route>
                    <Route path="/allposts">
                        <AllUsersPosts />
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