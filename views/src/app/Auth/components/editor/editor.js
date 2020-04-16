import React, { useState } from "react";
import axios from 'axios';
import 'suneditor/dist/css/suneditor.min.css';
import SunEditor, { buttonList, } from "suneditor-react";
import { Container, Col, Row, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './editor.css';

const PostEditorComponent = () => {
  
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const history = useHistory();

    let handlePost = (postId) => {
        let path = `/postWithComments/${postId}`
        history.push(path);
    }

    let handleFocus = event => {
        console.log(event);
    }

    let handleBlur = event => {
        console.log(event);
    }

    let sendPost = async () => {
        try {
            const res = await axios.post(`http://localhost:3001/api/posts/`,
                { data: { title, content }, userId: localStorage.userId },
                { headers: { 'Authorization': `Bearer ${localStorage.token}` } });
            if (res.status === 201) {
                console.log("Post successfully");
                handlePost(res.data.postId);
            } else if (res.status === 500) {
                alert("FAIL to post");
            }
        } catch (err) {
            console.log("FAIL making a post: ", err);

        }
    }

        return (
            <Container fluid="sm">
                <Row className="editor-container">
                    <Col className="editor">
                        <input
                            type='text'
                            name='title'
                            id='title'
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                            placeholder='Post title'>
                        </input>
                        <SunEditor
                            placeholder="Please type here..."
                            autoFocus={true}
                            onChange={setContent}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            setOptions={{
                                height: 200,
                                buttonList: buttonList.complex
                            }} />
                            <Col>
                        <Button id="post-button" variant="primary" block size="sm" type="submit" onClick={sendPost}>POST</Button>
                        </Col>
                    </Col>
                </Row>
            </Container>
        );
}

export default PostEditorComponent;

