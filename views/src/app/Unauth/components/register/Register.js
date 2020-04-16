import React, { useState } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import { withRouter } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import axios from 'axios';

const RegisterForm = props => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { loginHandler } = props;

    let creatUser = async () => {
        try {
            const res = await axios.post('http://localhost:3001/api/users/', { username, email, password });
            if (res.status === 201) {
                console.log("Successfully creating new user");
                localStorage.token = res.data.token;
                localStorage.userId = res.data.userId;
                localStorage.username = res.data.result.username; 
                loginHandler();
            } else {
                alert("FAIL log in");
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
                    <FormControl
                        autoFocus
                        placeholder="username"
                        type="username"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        required
                    />
                </FormGroup>
                <FormGroup controlId="regemail" bsSize="large">
                    <FormControl
                        autoFocus
                        placeholder="email"
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                </FormGroup>
                <FormGroup controlId="regpassword" bsSize="large">
                    <FormControl
                        value={password}
                        placeholder="password"
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                        required
                    />
                </FormGroup>
                <Button variant="info" block size="large" type="submit">
                    Send <FaArrowRight />
                </Button>
            </form>
        </div>
    );
}

export default withRouter(RegisterForm);