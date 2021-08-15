import React from 'react';
import { Link } from 'react-router-dom';
import { FcHighPriority } from 'react-icons/fc';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        height: '200px',
        width: '200px',
    },
    title: {
        marginTop: '2rem',
        color: '#d60000',
    },
}));

function Error() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <FcHighPriority className={classes.icon} />
            <h1 className={classes.title}>404 Not Found</h1>
            <Link to='/' style={{ textDecoration: 'none' }}>
                <Button
                    variant='contained'
                    color='secondary'
                    style={{
                        marginTop: '3rem',
                    }}>
                    Go Back
                </Button>
            </Link>
        </div>
    );
}

export default Error;
