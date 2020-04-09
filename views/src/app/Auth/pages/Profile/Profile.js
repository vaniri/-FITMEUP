import React from 'react';
import UserContainer from '../../components/user/user'
import PostsContainer from '../../components/post/post'
import { Container, Col, Row } from 'react-bootstrap';


const Profile = () => {
    return (
        <Container fluid="lr">
           <UserContainer />
           <PostsContainer
                reqUrl={`http://localhost:3001/api/posts/byuser/${localStorage.userId}`}
                reqType="multi"
                />
        </Container>
    )
}

export default Profile;

