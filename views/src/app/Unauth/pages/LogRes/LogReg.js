import React from 'react';
import LoginForm from '../../components/login/Login';
import RegisterForm from '../../components/register/Register';

const LogRegForms = ({ loginHandler }) => {
    return (
        <div id="logReg-container">
            <h5>Sign in</h5>
            <LoginForm loginHandler={loginHandler} />
            <h5>Or create an account</h5>
            <RegisterForm loginHandler={loginHandler} />
        </div>
    )
}

export default LogRegForms; 