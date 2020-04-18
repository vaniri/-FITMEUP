import React from 'react';
import AllPosts from '../components/AllPosts/AllPosts';
import { Container } from 'react-bootstrap';
import { apiUrl } from '../../utils';

const AllUsersPosts = () => {
    return (
        <Container fluid="lr">
           <AllPosts
                reqUrl={apiUrl('/api/posts/all')}
                />
        </Container>
    )
}

export default AllUsersPosts;

