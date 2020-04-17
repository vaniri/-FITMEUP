import React from 'react';
import UserContainer from '../../components/user/user';
import { Container } from 'react-bootstrap';
import UserInfo from '../../components/UserInfo';

const Profile = () => {
    return (
        <Container fluid="lr">
           <UserContainer />
           <UserInfo />>
        </Container>
    )
}

export default Profile;

