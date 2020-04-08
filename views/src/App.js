import React, { useState } from 'react';
import AuthorizedApp from './app/Auth/AuthorizedApp';
import UnauthorizedApp from './app/Unauth/UnauthorizedApp';
import 'bootstrap/dist/css/bootstrap.min.css';

function App () {
    const isAlreadyAuthorized = !!localStorage.token;
    const [isAuthorized, setAuthorized] = useState(isAlreadyAuthorized);

    let cleanStorage = () => {
        localStorage.token = "";
        localStorage.userId = "";
    }

    return (
        isAuthorized ?
            <AuthorizedApp logoutHandler={() => { setAuthorized(false); cleanStorage(); } } /> :
            <UnauthorizedApp loginHandler={() => setAuthorized(true)} />
    );
}

export default App;