import React from 'react';
import UserContainer from '../../components/user/user';
import { Container, Col, Row } from 'react-bootstrap';
import UserInfo from '../../components/userInfo/UserInfo';
import PostContainer from '../../components/post/post';
import './Profile.css';

const Profile = () => {
    return (
        <Container id="profile-container" fluid="lr">
            <Row>
                <Col>
                    <UserContainer />
                </Col>
            </Row>
            <Row>

                <Col>
                <h4>YOUR POSTS:</h4>
                    <PostContainer
                        reqUrl={`http://localhost:3001/api/posts//byuser/${localStorage.userId}`}
                        reqType="multi"
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <UserInfo />
                </Col>
            </Row>
        </Container>
    )
}

export default Profile;

