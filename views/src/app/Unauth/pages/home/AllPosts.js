import React from 'react';
import AllPosts from '../../../Auth/components/AllPosts/AllPosts'
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    return (
      <Container fluid="lr">
           <AllPosts
                reqUrl={`http://localhost:3001/api/posts/byuser/${localStorage.userId}`}
                reqType="multi"
                />
        </Container>
    )
}

export default Home; 