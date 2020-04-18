import React, { Component } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { apiUrl } from '../../../utils';
import 'bootstrap/dist/css/bootstrap.min.css';
import './UserInfo.css';

class UserInfo extends Component {
    constructor(props) {
        super(props);
        this.state = { friends: [] };
    }

    getUserfriends = async () => {
        try {
            const res = await axios.get(apiUrl('/api/subs/'),
                { headers: { 'Authorization': `Bearer ${localStorage.token}` } });
            if (res.status === 201) {
                this.setState({ friends: res.data.friendsData });
            }
            else {
                console.log("No friends found");
            }
        } catch (err) {
            console.log("No friends found", err);
        }
    }

    componentDidMount() {
        this.getUserfriends();
    }

    render() {
        return (
            <Container id="friends-list" fluid="lr">
                <Row className="friend-container">
                <h4>FRIENDS:</h4>
                    {this.state.friends.map(friend => (
                        <Col>
                            <Card className="friend" style={{ width: '18rem', border: "none" }}>
                                <Card.Body>
                                <Card.Title>User Info:</Card.Title>
                                    <Card.Text>
                                        <img className="user-img" alt="user avatar" src={friend.image} />
                                        <hr />
                                        <p className="friend-author"><a href={`/profile/${friend.userId}`}>{friend.username}</a></p>
                                        <p>{friend.email}</p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        )
    }
}

export default UserInfo;

