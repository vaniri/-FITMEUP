import React, { Component } from 'react';
import axios from 'axios';
import { Container, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaUserEdit, FaRegCommentDots } from 'react-icons/fa';
import UserContainer from '../components/user/user';


class FriendsPosts extends Component {
    constructor(props) {
        super(props);
        this.state = { posts: [] };
    }

    getfriendsPosts = async () => {
        try {
            const res = await axios.get('http://localhost:3001/api/posts/subs/',
                { headers: { 'Authorization': `Bearer ${localStorage.token}` } }, localStorage.userId);
            if (res.status === 200) {
                this.setState({ posts: res.data });
            } else if (res.status === 404) {
                console.log("No posts found");
            }
        } catch (err) {
            console.log("No posts found");
        }
    }

    componentDidMount() {
        this.getfriendsPosts();
    }

    render() {
        return (
            <Container fluid="sm">
                {this.state.posts.map(post => (
                    <Row className="posts-container">
                        <Col className="post">
                            <h5 className="post-title" >{post.title}</h5>
                            <p className="post-author"><a href={`/profile/${post.author._id}`}><FaUserEdit /> {post.author.username}</a>
                                <div className="hiden"><UserContainer userId={post.author._id} /></div>
                                <p className="comment-date">posted: {post.posted.toString().slice(0, 10)}</p>
                            </p>
                            <p className="content" dangerouslySetInnerHTML={{ __html: post.content }}></p>
                            <Row>
                                <Col id="link-container">
                                    <a href={`/postWithComments/${post._id}`}><FaRegCommentDots /> read comments...</a>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                ))}
            </Container>
        )
    }
}

export default FriendsPosts;
