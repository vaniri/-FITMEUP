import React from 'react';
import LoginForm from '../../components/login/Login';
import RegisterForm from '../../components/register/Register';

const Home = ({ loginHandler }) => {
    return (
        <div>
            <LoginForm loginHandler={loginHandler} />
            <RegisterForm loginHandler={loginHandler} />
        </div>
    )
}

export default Home; 