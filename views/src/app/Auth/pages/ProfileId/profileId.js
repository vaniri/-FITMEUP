import React from 'react';
import UserContainer from '../../components/user/user';
import { Container } from 'react-bootstrap';

const ProfileId = ({ userId }) => {
    return (
        <Container fluid="lr">
           <UserContainer userId={userId}/>
        </Container>
    )
}

export default ProfileId;

