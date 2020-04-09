import React, { Component } from 'react';
import axios from 'axios';
import { Container, Row, Col, Button, FormGroup, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './comments.css';

class CommentsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { comments: [] };
    }

    getComments = async () => {
        try {
            let res = await axios.get(`http://localhost:3001/api/posts/byid/${this.props.postItem}`);
            if (res.status === 200) {
                this.setState({ comments: res.data.comments });
            } else {
                console.log("FAIL get comments:", res.status);
            }
        } catch (err) {
            console.log("FAIL get comments: ", err);
        }
    }

    postComment = async () => {
        let body = this.commentEditor.value;
        try {
            let res = await axios.post('http://localhost:3001/api/comments/', { body, postItem: this.props.postItem });
            if (res.status === 201) {
                console.log("Successfully creating a comment");
                console.log(res.data);
            } else {
                console.log(res);
                alert("FAIL post comment");
            }
        } catch (err) {
            console.log("FAIL post comment ", err);
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.postComment();
    }

    componentDidMount() {
        this.getComments();
    }

    render() {
        return (
            <Container fluid="lr">
                <Row className="commentsForm-container">
                    <Col>
                        <form onSubmit={this.handleSubmit}>
                            <FormGroup controlId="comment" bsSize="large">
                                <FormControl
                                    ref={(fc) => this.commentForm = fc}
                                    placeholder="type here..."
                                    type="text"
                                />
                            </FormGroup>
                            <Button block bsSize="large" type="submit">Leave Comment
                            </Button>
                        </form>
                    </Col>
                    </Row>
                    <Row className="comment-container">
                    {this.state.comments.map(comment => (
                        <Col className="comment">
                            <h5>{comment.author.username}</h5>
                            <p>{comment.body}</p>
                        </Col>
                    ))}
                </Row>
            </Container>
        )
    }
}


export default CommentsContainer;
