import React, { Component } from 'react';
import axios from 'axios';
import { Col, Row, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import UploadImg from '../../components/uploadImg/uploadImg';
import SubsButton from '../subsButton/subsButton';
import './user.css';

class UserContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    getUserData = async () => {
        const res = await axios.get(`http://localhost:3001/api/users/${this.props.userId || localStorage.userId}`);
        if (res.status === 200) {
            this.setState(res.data.user);
            // const likes = await axios.get('http://localhost:3001/api/likes/',
            // { headers: { 'Authorization': `Bearer ${localStorage.token}` } });
            // console.log(likes);
            // this.setState({ ...res.data.user, likes });
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
            <Card className="user-container" style={{ width: '18rem', border: "none" }}>
                <Card.Body>
                    <Card.Title>User Info:</Card.Title>
                    <Card.Text>
                        <img className="user-img" alt="user avatar" src={this.state.image || "https://www.pepper.ru/assets/img/profile-placeholder_f56af.png"} />
                        <h5>{this.state.username}</h5>
                        <h5>{this.state.email}</h5>
                        {
                            localStorage.token && localStorage.userId !== this.state._id ?
                                (<SubsButton tgtUser={this.state._id}></SubsButton>) : (<div></div>)
                        }
                        {
                            !this.props.userId ?
                                (<Col>
                                    {/* <p>{this.state.likes}</p> */}
                                    <hr />
                                    <UploadImg handleSelection={image => this.setState({ image })} />
                                </Col>) :
                                (<div></div>)
                        }
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

export default UserContainer;

