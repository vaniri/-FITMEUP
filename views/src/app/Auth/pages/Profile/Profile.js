import React, { Component } from 'react';
import axios from 'axios';
import "./Profile.css";
import { Container, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = { posts: [] };
    }

    getUserData = async () => {
        console.log(localStorage.userId);
        const res = await axios.get(`http://localhost:3001/api/users/${localStorage.userId}`);
        console.log(res.data);
        if (res.status === 200) {
            this.setState(res.data.user);
        }
        else if (res.status === 404) {
            alert("No user found");
        } else {
            console.log("FAIL get user data:", res.status);
        }
    }

    getUserPosts = async () => {
        const res = await axios.get(`http://localhost:3001/api/posts/byuser/${localStorage.userId}`);
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
        this.getUserData();
        this.getUserPosts();
    }

    render() {
        console.log(this.state.posts);
        return (
            <Container fluid="lr">
                <Row className="user-container">
                    <Col className="posts-container">
                        <h4>Latest Posts:</h4>
                        <div className="post-container">
                            {this.state.posts.map(post => (
                                <div className="post">
                                    <h5>{post.title}</h5>
                                    <p className="content" dangerouslySetInnerHTML={{ __html: post.content }}></p>
                                    <hr />
                                </div>
                            ))}
                        </div>
                    </Col>
                    <Col xs={2} className="user">
                        <img className="user-img" alt="user avatar" src={this.state.image || "https://www.pepper.ru/assets/img/profile-placeholder_f56af.png"} />
                        <h5>{this.state.username}</h5>
                        <h5>{this.state.email}</h5>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Profile;