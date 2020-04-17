import React, { Component } from 'react';
import axios from 'axios';
import { Container, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaUserEdit } from 'react-icons/fa';
import LikeButton from '../likesButton/likes';
import UserContainer from '../user/user'
import DeleteButton from '../deleteButton/deleteButton';
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
                {this.state.posts.map(post => (
                    <Row className="posts-container">
                        <Col className="post">
                            <Col id="del-bitton-container">
                                <DeleteButton
                                    url={`http://localhost:3001/api/posts//byid/${post._id}`}
                                    component="post" 
                                    postaAthorId={post.author._id}
                                    />
                            </Col>
                            <h5 className="post-title" >{post.title}</h5>
                            <p className="post-author"><a href={`/profile/${post.author._id}`}><FaUserEdit /> {post.author.username}</a>
                                <div className="hiden"><UserContainer userId={post.author._id} /></div>
                                <p className="comment-date" >posted: {post.posted.toString().slice(0, 10)}</p>
                            </p>
                            <p className="content" dangerouslySetInnerHTML={{ __html: post.content }}></p>
                            {localStorage.token ?
                                (
                                    <Row>
                                        <Col id="link-container">
                                            <LikeButton
                                                postItem={post._id}
                                                likesObj={post.likesObj}
                                            />
                                        </Col>
                                    </Row>
                                ) :
                                (<div></div>)
                            }
                        </Col>
                    </Row>
                ))}
            </Container>
        )
    }
}

export default PostContainer;
