import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Alert from '@material-ui/lab/Alert';
import { useGlobalContext } from '../context';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        alignSelf: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    bottom: {
        position: 'relative',
        top: '2rem',
    },
    top: {
        marginTop: '1rem',
    },
    paper: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
}));

function Search() {
    const classes = useStyles();
    const { setsubmitCurUser, rate, isDark, isError, setisError } =
        useGlobalContext();
    const [currentUser, setcurrentUser] = useState('gaearon');

    useEffect(() => {
        if (currentUser) {
            setisError(false);
        }
    }, [currentUser]);

    let bg = isDark && '#333';
    let col = isDark && 'white';
    let conditionStyle = { backgroundColor: bg, color: col };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentUser) {
            // setisError(false);
            setsubmitCurUser(currentUser);
        } else {
            setisError(true);
        }
    };

    return (
        <div className={classes.root}>
            {isError && (
                <div className={classes.top}>
                    <Alert severity='error'>
                        User does not Exist/No Input!!
                    </Alert>
                </div>
            )}

            <div className={classes.bottom}>
                <Grid
                    container
                    spacing={3}
                    justifyContent='space-between'
                    alignItems='center'>
                    <Grid item xs={7}>
                        {/* Search */}
                        <Paper
                            style={conditionStyle}
                            component='form'
                            className={classes.paper}
                            onSubmit={(e) => handleSubmit(e)}>
                            <InputBase
                                style={conditionStyle}
                                className={classes.input}
                                placeholder='Search GitHub User'
                                inputProps={{
                                    'aria-label': 'search google maps',
                                }}
                                value={currentUser}
                                onChange={(e) => setcurrentUser(e.target.value)}
                            />
                            <Divider
                                style={{ backgroundColor: isDark && 'white' }}
                                className={classes.divider}
                                orientation='vertical'
                            />
                            <IconButton
                                type='submit'
                                className={classes.iconButton}
                                aria-label='search'>
                                <SearchIcon style={conditionStyle} />
                            </IconButton>
                        </Paper>
                    </Grid>

                    <Grid item xs={5}>
                        {/* requests */}
                        <Typography
                            color='textSecondary'
                            variant='h5'
                            style={{ textAlign: 'end' }}>
                            <span style={{ color: isDark && 'white' }}>
                                {' '}
                                Requests {rate}/60
                            </span>
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default Search;
