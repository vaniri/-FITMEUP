import React from 'react';
import LoginForm from '../../components/login/Login';
import RegisterForm from '../../components/register/Register';
import Nav from '../../components/navbar/Navbar'

const Home = ({ loginHandler }) => {
    return (
        <div>
            <LoginForm loginHandler={loginHandler} />
            <RegisterForm loginHandler={loginHandler} />
        </div>
    )
}

export default Home; 