import React from 'react';
import FriendsPosts from '../../components/friendsPosts';
import { Container } from 'react-bootstrap';
import './Home.css';

const HomeAuth = () => {
    return (
        <Container fluid="lr">
            < FriendsPosts />
        </Container>
    )
}

export default HomeAuth;

