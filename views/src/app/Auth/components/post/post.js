import React, { Component } from 'react';
import axios from 'axios';
import { Container, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaUserEdit, FaRegCommentDots } from 'react-icons/fa';
import LikeButton from '../likesButton/likes';
import UserContainer from '../user/user'
import DeleteButton from '../deleteButton/deleteButton';
import './post.css';

class PostContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    getUserPosts = async () => {
        const res = await axios.get(this.props.reqUrl);
        if (res.status === 200) {
            this.setState({ post: res.data });
        } else if (res.status === 404) {
            alert("No posts found");
        } else {
            console.log("FAIL get posts", res.status);
        }
    }

    componentDidMount() {
        this.getUserPosts();
    }

    render() {
        if(!this.state.post) { return <div></div> };
        return (
            <Container fluid="sm">
                    <Row className="posts-container">
                        <Col className="post">
                            <Col id="del-bitton-container">
                                <DeleteButton
                                    url={`http://localhost:3001/api/posts//byid/${this.state.post._id}`}
                                    component="post"
                                    postAuthorId={this.state.post.author._id}
                                />
                            </Col>
                            <h5 className="post-title" >{this.state.post.title}</h5>
                            <p className="post-author"><a href={`/profile/${this.state.post.author._id}`}><FaUserEdit /> {this.state.post.author.username}</a>
                                <div className="hiden"><UserContainer userId={this.state.post.author._id} /></div>
                                <p className="comment-date">posted: {new Date(this.state.post.posted).toLocaleString()}</p>
                            </p>
                            <p className="content" dangerouslySetInnerHTML={{ __html: this.state.post.content }}></p>
                            {localStorage.token && this.state.post.likesObj ?
                                (
                                    <Row>
                                        <Col id="link-container">
                                            <LikeButton
                                                postItem={this.state.post._id}
                                                likesObj={this.state.post.likesObj}
                                            />
                                        </Col>
                                    </Row>
                                ) :
                                (<div></div>)
                            }
                        </Col>
                    </Row>
            </Container>
        )
    }
}

export default PostContainer;
