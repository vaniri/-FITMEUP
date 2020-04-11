import React, { Component } from 'react';
import axios from 'axios';
import { Col, Row, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import UploadImg from '../../components/uploadImg/uploadImg';
import './user.css';

class UserContainer extends Component {
    constructor(props) {
        super(props);
        this.state = ({});
    }

    getUserData = async () => {
        const res = await axios.get(`http://localhost:3001/api/users/${localStorage.userId}`);
        if (res.status === 200) {
            this.setState(res.data.user);
        }
        else if (res.status === 404) {
            alert("No user found");
        } else {
            console.log("FAIL get user data:", res.status);
        }
    }

    componentDidMount() {
        this.getUserData();
    }

    render() {
        return (
            <Row className="user-container">
                <Col className="user">
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>User Info:</Card.Title>
                            <Card.Text>
                                <img className="user-img" alt="user avatar" src={this.state.image || "https://www.pepper.ru/assets/img/profile-placeholder_f56af.png"} />
                                <h5>{this.state.username}</h5>
                                <h5>{this.state.email}</h5>
                            </Card.Text>
                            <Col>
                                <UploadImg handleSelection={image => this.setState({image})}/>
                            </Col>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        )
    }
}

export default UserContainer;

