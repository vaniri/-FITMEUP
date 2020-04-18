import React from 'react';
import AllPosts from '../components/AllPosts/AllPosts';
import { Container } from 'react-bootstrap';

const AllUsersPosts = () => {
    return (
        <Container fluid="lr">
           <AllPosts
                reqUrl={'http://localhost:3001/api/posts/all'}
                />
        </Container>
    )
}

export default AllUsersPosts;

