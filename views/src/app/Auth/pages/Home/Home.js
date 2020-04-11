import React, { Component } from 'react';
import axios from 'axios';
import { Container, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

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
            <div>
                <Container fluid="lr">
                    <Row>
                        <Col className="post-container" style={{backgroundColor: "darkgray", padding: "1em"}}>
                        <h4>Latest Posts:</h4>
                            {this.state.posts.map(post => (
                                <Col className="post">
                                    <h5>Author: {post.author.username}</h5>
                                    <h5>{post.title}</h5>
                                    <p className="content" dangerouslySetInnerHTML={{ __html: post.content }}></p>
                                    <hr />
                                </Col>
                            ))}
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Home; 