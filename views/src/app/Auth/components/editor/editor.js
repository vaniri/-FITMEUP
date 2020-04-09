import React, { Component } from 'react';
import axios from 'axios';
import 'suneditor/dist/css/suneditor.min.css';
import SunEditor, { buttonList, } from "suneditor-react";
import { Container, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './editor.css';

class MyComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { title: "", content: "" };
    }

    handleChange = (content) => {
        this.setState({ content });
    }

    getTitle = (event) => {
        let title = event.target.value;
        this.setState({ title });
    }

    handleFocus = event => {
        console.log(event);
    }

    handleBlur = event => {
        console.log(event);
    }

    sendPost = async () => {
        try {
            console.log("TOKEN", localStorage);
            const res = await axios.post(`http://localhost:3001/api/posts/`,
                { data: this.state, userId: localStorage.userId },
                { headers: { 'Authorization': `Bearer ${localStorage.token}` } });
            if (res.status.code === 201) {
                console.log("Post")
            } else if (res.status === 500) {
                alert("FAIL to post");
            }
        } catch (err) {
            console.log("FAIL making a post: ", err);

        }
    }

    render() {
        return (
            <Container className="editor">
                <Row>
                    <Col>
                        <p> Create new post </p>
                        <input
                            type='text'
                            name='title'
                            id='title'
                            value={this.title}
                            onChange={this.getTitle}
                            placeholder='title'>
                        </input>
                        <SunEditor
                            placeholder="Please type here..."
                            autoFocus={true}
                            onChange={this.handleChange}
                            onFocus={this.handleFocus}
                            onBlur={this.handleBlur}
                            setOptions={{
                                height: 200,
                                buttonList: buttonList.complex
                            }} />
                        <button type="submit" onClick={this.sendPost}>POST</button>
                    </Col>
                </Row>
            </Container>
        );
    };
}

export default MyComponent;

