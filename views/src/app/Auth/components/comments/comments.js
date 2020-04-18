import React, { Component } from 'react';
import axios from 'axios';
import { Container, Row, Col, Button, FormGroup, FormControl } from 'react-bootstrap';
import { apiUrl } from '../../../utils';
import 'bootstrap/dist/css/bootstrap.min.css';
import './comments.css';

class CommentsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { comments: [] };
    }

    getComments = async () => {
        try {
            let res = await axios.get(apiUrl(`/api/posts/byid/${this.props.postItem}`));
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
        let body = this.commentForm.value;
        try {
            let res = await axios.post(apiUrl('/api/comments/'),
                { body, postItem: this.props.postItem },
                { headers: { 'Authorization': `Bearer ${localStorage.token}` } });
            if (res.status === 201) {
                console.log("Successfully creating a comment");
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
        let comment = {
            body: this.commentForm.value,
            author: { username: localStorage.username, image: localStorage.userImg },
            posted: new Date()
        };
        this.setState({ comments: [...this.state.comments, comment] });
        this.commentForm.value = "";
    }

    componentDidMount() {
        this.getComments();
    }

    render() {
        return (
            <div>
                <Container fluid="sm">
                    {this.state.comments.map(comment => (
                        <Row className="comment-container">
                            <img className="user-img" src={comment.author.image}/>
                            <Col className="comment">
                    {<p className="comment-author">{comment.author ? comment.author.username : "<no author>"}</p>}
                    <p className="comment-date" >posted: {new Date(comment.posted).toLocaleString()}</p>
                                <p>{comment.body}</p>
                            </Col>
                        </Row>
                    ))}
                    {localStorage.token ?
                        (<Row id="commentsForm-container" fluid="sm">
                            <Col>
                                <form onSubmit={this.handleSubmit}>
                                    <FormGroup controlId="comment" bsSize="large">
                                        <FormControl id="comment-form"
                                            ref={(fc) => this.commentForm = fc}
                                            placeholder="type here..."
                                            type="text"
                                        />
                                    </FormGroup>
                                    <Button id="leave-comment" variant="primary" block bsSize="large" type="submit">Leave Comment
                            </Button>
                                </form>
                            </Col>
                        </Row>) : 
                        (<div></div>)
                    }
                </Container>
            </div>
        )
    }
}

export default CommentsContainer;
