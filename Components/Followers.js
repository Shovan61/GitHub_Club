import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { useGlobalContext } from '../context';
import './Followers.css';
import { useTheme } from '../ThemeContext';

const useStyles = makeStyles({
    before: {
        width: '20%',
        padding: '0.5rem',
        backgroundColor: 'white',
        borderTopLeftRadius: '9px',
        borderTopRightRadius: '9px',
        boxShadow: '5px 7px 6px -5px rgba(0,0,0,0.44)',
    },
    root: {
        height: '22.5rem',
        overflowY: 'scroll',
    },
    follower: {
        display: 'flex',
        width: '30%',
        height: '20%',
        margin: '1rem',
    },
    info: {
        height: '20%',
        marginLeft: '1rem',
        display: 'flex',
        flexDirection: 'column',
    },
});

function Followers() {
    const classes = useStyles();
    const { followers, isDark } = useGlobalContext();
    let bg = isDark && '#333';
    let col = isDark && 'white';
    let conditionStyle = { backgroundColor: bg, color: col };
    return (
        <>
            <div className={classes.before} style={conditionStyle}>
                <span style={{ marginLeft: '5px' }}>Followers</span>
            </div>

            <Card className={classes.root} style={conditionStyle}>
                {followers.map((cur, i) => {
                    const { avatar_url, html_url, login } = cur;

                    return (
                        <div className={classes.follower}>
                            <Avatar>
                                <img
                                    height='40px'
                                    width='40px'
                                    src={avatar_url}
                                    alt={login}
                                />
                            </Avatar>
                            <div className={classes.info}>
                                <Typography variant='subtitle2'>
                                    {login}
                                </Typography>
                                <Typography variant='subtitle2'>
                                    <a
                                        href={html_url}
                                        target='_blank'
                                        style={conditionStyle}>
                                        {html_url}
                                    </a>
                                </Typography>
                            </div>
                        </div>
                    );
                })}
            </Card>
        </>
    );
}

export default Followers;
