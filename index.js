import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppProvider } from './context';
import { Auth0Provider } from '@auth0/auth0-react';
// dev-fjq3od11.us.auth0.com
// 3TeP00Wre43diXs7D6uwO4iJ6G38I39u

ReactDOM.render(
    <React.StrictMode>
        <Auth0Provider
            domain='dev-fjq3od11.us.auth0.com'
            clientId='3TeP00Wre43diXs7D6uwO4iJ6G38I39u'
            redirectUri={window.location.origin}
            cacheLocation='localstorage'>
            <Router>
                <AppProvider>
                    <App />
                </AppProvider>
            </Router>
        </Auth0Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
