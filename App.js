import React from 'react';
import { Dashboard, Error, Login, PrivateRoute, AuthWrapper } from './Pages';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from './ThemeContext';

function App() {
    return (
        <AuthWrapper>
            <ThemeProvider>
                <div>
                    <Switch>
                        <PrivateRoute exact path='/'>
                            <Dashboard />
                        </PrivateRoute>

                        <Route exact path='/login'>
                            <Login />
                        </Route>

                        <Route exact path='*'>
                            <Error />
                        </Route>
                    </Switch>
                </div>
            </ThemeProvider>
        </AuthWrapper>
    );
}

export default App;
