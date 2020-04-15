import React from 'react';
import UserContainer from '../../components/user/user';
import AllPosts from '../../components/AllPosts/AllPosts';
import { Container } from 'react-bootstrap';

const Profile = () => {
    return (
        <Container fluid="lr">
           <UserContainer /*className={userProfContainer}*//>
           <AllPosts
                reqUrl={`http://localhost:3001/api/posts/byuser/${localStorage.userId}`}
                reqType="multi"
                />
        </Container>
    )
}

export default Profile;

