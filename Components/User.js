import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import { useGlobalContext } from '../context';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AttachmentIcon from '@material-ui/icons/Attachment';

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
        width: '100%',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        height: '22.5rem',
    },
    top: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
    },
    left: {
        display: 'flex',
    },
    img: {
        height: '80px',
        width: '80px',
    },
    nameinfo: {
        marginTop: '0.5rem',
        marginLeft: '1rem',
        display: 'flex',
        flexDirection: 'column',
    },
    bottom: {
        marginTop: '1rem',
        display: 'flex',
        flexDirection: 'column',
    },
    span: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '30%',
        marginBottom: '1rem',
    },
    icon: {
        backgroundColor: '#f5f5ff',
        borderRadius: '50%',
        marginRight: '1.5rem',
    },
    bio: {
        marginBottom: '2rem',
    },
});

function User() {
    const classes = useStyles();
    const { user, isDark } = useGlobalContext();
    const { avatar_url, name, login, company, location, email, bio, html_url } =
        user;

    let bg = isDark && '#333';
    let col = isDark && 'white';
    let conditionStyle = { backgroundColor: bg, color: col };
    let icnStyle = {
        backgroundColor: isDark ? '#777' : '#f5f5ff',
    };
    let textStyle = { color: isDark ? 'white' : 'black' };

    return (
        <>
            <div className={classes.before} style={conditionStyle}>
                <span style={{ marginLeft: '5px' }}>User</span>
            </div>
            <Card className={classes.root} style={conditionStyle}>
                {/* Top */}

                <div className={classes.top}>
                    <div className={classes.left}>
                        <Avatar className={classes.img}>
                            <img
                                src={avatar_url}
                                alt={name}
                                height='100%'
                                width='100%'
                            />
                        </Avatar>
                        <div className={classes.nameinfo}>
                            <Typography variant='h7' className={classes.name}>
                                {name}
                            </Typography>
                            <Typography
                                variant='h7'
                                color='textSecondary'
                                style={textStyle}
                                className={classes.name}>
                                {login}
                            </Typography>
                        </div>
                    </div>
                    <div>
                        <a
                            href={html_url}
                            target='_blank'
                            style={{ textDecoration: 'none' }}>
                            <Button
                                variant={isDark ? 'contained' : 'outlined'}
                                color='primary'
                                style={{
                                    alignSelf: 'flex-end',
                                }}>
                                Follow
                            </Button>
                        </a>
                    </div>
                </div>
                {/* Bottom */}

                <div className={classes.bottom}>
                    <Typography
                        variant='subtitle'
                        color='textSecondary'
                        className={classes.bio}
                        style={textStyle}>
                        {bio}
                    </Typography>

                    <span className={classes.span}>
                        <LocationCityIcon
                            className={classes.icon}
                            style={icnStyle}
                        />
                        {company || 'undisclosed'}
                    </span>
                    <span className={classes.span}>
                        <LocationOnIcon
                            className={classes.icon}
                            style={icnStyle}
                        />
                        {location || 'undisclosed'}
                    </span>
                    <span className={classes.span}>
                        <AttachmentIcon
                            className={classes.icon}
                            style={icnStyle}
                        />
                        {email || 'undisclosed'}
                    </span>
                </div>
            </Card>
        </>
    );
}

export default User;
