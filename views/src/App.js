import React, { useState } from 'react';
import AuthorizedApp from './app/Auth/AuthorizedApp';
import UnauthorizedApp from './app/Unauth/UnauthorizedApp';

function App () {
    const isAlreadyAuthorized = !!localStorage.token;
    const [isAuthorized, setAuthorized] = useState(isAlreadyAuthorized);
    return (
        isAuthorized ?
            <AuthorizedApp logoutHandler={() => setAuthorized(false) } /> :
            <UnauthorizedApp loginHandler={() => setAuthorized(true) } />
    );
}

export default App;