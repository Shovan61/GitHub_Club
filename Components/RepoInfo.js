import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import { useGlobalContext } from '../context';
import {
    FcAcceptDatabase,
    FcTodoList,
    FcBusinessman,
    FcPuzzle,
} from 'react-icons/fc';

const useStyles = makeStyles((theme) => ({
    before: {
        width: '38%',
        padding: '0.5rem',
        backgroundColor: 'white',
        borderTopLeftRadius: '9px',
        borderTopRightRadius: '9px',
        boxShadow: '5px 7px 6px -5px rgba(0,0,0,0.44)',
    },
    root: {
        flexGrow: 1,
        marginTop: '3rem',
        alignSelf: 'center',
    },

    iconButton: {
        padding: 10,
    },

    info: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: '1rem',
        paddingBottom: '1rem',
        '& button': {
            marginLeft: '1rem',
        },
    },
    infoText: {
        marginRight: '1rem',
    },
}));

function RepoInfo() {
    const classes = useStyles();
    const { user, isDark } = useGlobalContext();
    const { followers, public_gists, public_repos, following } = user;

    let bg = isDark && '#333';
    let col = isDark && 'white';
    let conditionStyle = { backgroundColor: bg, color: col };
    let icnStyle = { backgroundColor: isDark ? '#777' : '#f5f5ff' };
    let textStyle = { color: isDark ? 'white' : 'red' };

    return (
        <div className={classes.root}>
            <Grid
                container
                spacing={3}
                justifyContent='space-between'
                alignItems='center'>
                {/* Repo information */}
                <Grid item xs={6} md={3}>
                    <div className={classes.before} style={conditionStyle}>
                        <span style={{ marginLeft: '5px' }}>Repos</span>
                    </div>
                    <Card className={classes.info} style={conditionStyle}>
                        <IconButton style={icnStyle}>
                            <FcAcceptDatabase />
                        </IconButton>
                        <Typography
                            color='textSecondary'
                            variant='h7'
                            className={classes.infoText}>
                            <span style={textStyle}>{public_repos}</span>{' '}
                            <span style={textStyle}>Repos</span>
                        </Typography>
                    </Card>
                </Grid>
                <Grid item xs={6} md={3}>
                    <div className={classes.before} style={conditionStyle}>
                        <span style={{ marginLeft: '5px' }}>Followers</span>
                    </div>
                    <Card className={classes.info} style={conditionStyle}>
                        <IconButton style={icnStyle}>
                            <FcBusinessman />
                        </IconButton>
                        <Typography
                            color='textSecondary'
                            variant='h7'
                            className={classes.infoText}>
                            <span style={textStyle}> {followers} </span>{' '}
                            <span style={textStyle}>Followers</span>
                        </Typography>
                    </Card>
                </Grid>
                <Grid item xs={6} md={3}>
                    <div className={classes.before} style={conditionStyle}>
                        <span style={{ marginLeft: '5px' }}>Followings</span>
                    </div>
                    <Card className={classes.info} style={conditionStyle}>
                        <IconButton style={icnStyle}>
                            <FcTodoList />
                        </IconButton>
                        <Typography
                            color='textSecondary'
                            variant='h7'
                            className={classes.infoText}>
                            <span style={textStyle}>{following}</span>{' '}
                            <span style={textStyle}>Followings</span>
                        </Typography>
                    </Card>
                </Grid>
                <Grid item xs={6} md={3}>
                    <div className={classes.before} style={conditionStyle}>
                        <span style={{ marginLeft: '5px' }}>Gists</span>
                    </div>
                    <Card className={classes.info} style={conditionStyle}>
                        <IconButton style={icnStyle}>
                            <FcPuzzle />
                        </IconButton>
                        <Typography
                            color='textSecondary'
                            variant='h7'
                            className={classes.infoText}>
                            <span style={textStyle}>{public_gists}</span>{' '}
                            <span style={textStyle}> Gists</span>
                        </Typography>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
}

export default RepoInfo;
