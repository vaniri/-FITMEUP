import React, { useState } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { withRouter } from 'react-router-dom';
import axios from 'axios';

const RegisterForm = props => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { history, loginHandler } = props;

    let creatUser = async () => {
        try {
            console.log(username, email, password);
            const res = await axios.post('http://localhost:3001/api/users/', { username, email, password });
            if (res.status === 200) {
                console.log("Successfully creating new user");
                history.push('/profile');
                localStorage.token = res.data.token;
                loginHandler();
            } else {
                console.log("FAIL log in"); //TODO
            }
        } catch (err) {
            console.log("FAIL creating new user: ", err);
        }
    }

    let handleSubmit = event => {
        event.preventDefault();
        creatUser();
    }

    return (
        <div className="Login">
            <form onSubmit={handleSubmit}>
                <FormGroup controlId="username" bsSize="large">
                    <ControlLabel>Username</ControlLabel>
                    <FormControl
                        autoFocus
                        type="username"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        required
                    />
                </FormGroup>
                <FormGroup controlId="email" bsSize="large">
                    <ControlLabel>Email</ControlLabel>
                    <FormControl
                        autoFocus
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                </FormGroup>
                <FormGroup controlId="password" bsSize="large">
                    <ControlLabel>Password</ControlLabel>
                    <FormControl
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                        required
                    />
                </FormGroup>
                <Button block bsSize="large" type="submit">
                    Create Account
                </Button>
            </form>
        </div>
    );
}

export default withRouter(RegisterForm);