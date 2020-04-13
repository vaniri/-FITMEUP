import React, { Component } from 'react';
import axios from 'axios';
import { Container, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import LikeButton from '../likes/likes';
import './post.css';

class PostContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { posts: [] };
    }

    getUserPosts = async () => {
        const res = await axios.get(this.props.reqUrl);
        if (res.status === 200) {
            if (this.props.reqType === "multi") {
                this.setState({ posts: res.data.posts });
            } else if (this.props.reqType === "single") {
                this.setState({ posts: [res.data] });
            } else {
                console.error("Unknown post url type", this.props.reqType);
            }
        }
        else if (res.status === 404) {
            alert("No posts found");
        } else {
            console.log("FAIL get posts", res.status);
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
                                    <LikeButton postItem={post._id} />
                                </Col>
    
                            </Col>
                        </Row>
                    ))}
                </Row>
            </Container>
        )
    }
}

export default PostContainer;

