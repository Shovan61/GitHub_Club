import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    loader: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
}));

function AuthWrapper({ children }) {
    const classes = useStyles();
    const { isLoading, error } = useAuth0();

    if (isLoading) {
        return (
            <div className={classes.loader}>
                <CircularProgress thickness={5} size='5rem'></CircularProgress>
            </div>
        );
    }
    if (error) {
        return <div>Oops... {error.message}</div>;
    }
    return <React.Fragment>{children}</React.Fragment>;
}

export default AuthWrapper;
