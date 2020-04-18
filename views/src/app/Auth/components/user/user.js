import React, { Component } from 'react';
import axios from 'axios';
import { Col, Row, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaUser, FaEnvelope} from "react-icons/fa";
import { apiUrl } from '../../../utils';
import UploadImg from '../../components/uploadImg/uploadImg';
import SubsButton from '../subsButton/subsButton';
import './user.css';

class UserContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    getUserData = async () => {
        const res = await axios.get(apiUrl(`/api/users/${this.props.userId || localStorage.userId}`));
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
            <Card className="user-container" style={{ width: '18rem', border: "none" }}>
                <Card.Body>
                    <Card.Title>User Info:</Card.Title>
                    <Card.Text>
                        <img className="user-img" alt="user avatar" src={this.state.image || "https://www.pepper.ru/assets/img/profile-placeholder_f56af.png"} />
                        <h6><FaUser /> {this.state.username}</h6>
                        <h7><FaEnvelope /> {this.state.email}</h7>
                        {
                            localStorage.token && localStorage.userId !== this.state._id ?
                                (<SubsButton tgtUser={this.state._id}></SubsButton>) : (<div></div>)
                        }
                        {
                            !this.props.userId ?
                                (<Col>
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

