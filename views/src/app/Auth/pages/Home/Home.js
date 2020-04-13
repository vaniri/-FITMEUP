import React, { Component } from 'react';
import axios from 'axios';
import { Container, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { posts: [] };
    }

    getUserPosts = async () => {
        const res = await axios.get('http://localhost:3001/api/posts/all');
        if (res.status === 200) {
            this.setState({ posts: res.data.posts });
        }
        else if (res.status === 404) {
            alert("No user found");
        } else {
            console.log("FAIL get user data:", res.status);
        }
    }

    componentDidMount() {
        this.getUserPosts();
    }

    render() {
        return (
            <Container fluid="sm">
                <Row className="posts-container">
                    {this.state.posts.map(post => (
                        <Row className="posts-container">
                            <Col className="post">
                                <h5 id="post-title" >{post.title}</h5>
                                <p className="content" dangerouslySetInnerHTML={{ __html: post.content }}></p>
                                <Col id="link-container">
                                <a href={`/postWithComments/${post._id}`}>read comments...</a>
                                </Col>
                            </Col>
                        </Row>
                    ))}
                </Row>
            </Container>
        )
    }
}

export default Home; 