import React from 'react';
import AllPosts from '../../../Auth/components/AllPosts/AllPosts'
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { apiUrl } from '../../../utils';

const Home = () => {
    return (
      <Container fluid="lr">
           <AllPosts
                reqUrl={apiUrl('/api/posts/all')}
                />
        </Container>
    )
}

export default Home; 