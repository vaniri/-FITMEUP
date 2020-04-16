import React, { Component } from 'react';
import axios from 'axios';
import { Container, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaUserEdit, FaRegCommentDots } from 'react-icons/fa';
import UserContainer from '../user/user'
import './ALLPosts.css';

class AllPosts extends Component {
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
                {this.state.posts.map(post => (
                    <Row className="posts-container">
                        <Col className="post">
                            <h5 id="post-title" >{post.title} </h5>
                            <p id="post-author">
                                <a id="author-link" href={`/profile/${post.author._id}`}><FaUserEdit /> {post.author.username}</a>
                                <div id="hiden"><UserContainer userId={post.author._id} /></div>
                            </p>
                            <p className="content" dangerouslySetInnerHTML={{ __html: post.content }}></p>
                            <Col id="link-container">
                                <a href={`/postWithComments/${post._id}`}><FaRegCommentDots /> read comments...</a>
                            </Col>
                        </Col>
                    </Row>
                ))}
            </Container>
        )
    }
}

export default AllPosts; 