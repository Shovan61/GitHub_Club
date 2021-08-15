import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { BiSun } from 'react-icons/bi';
import { HiOutlineMoon } from 'react-icons/hi';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Search, User, Followers, RepoInfo } from '../Components';
import { useGlobalContext } from '../context';
import Repos from '../Charts/Repos';
import { useTheme } from '../ThemeContext';
import { useAuth0 } from '@auth0/auth0-react';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
    },
    title: {
        flexGrow: 1,
    },
    icon: {
        marginRight: '2rem',
    },
    searchContainer: {
        width: '90%',
        alignSelf: 'center',
        height: '8rem',
        display: 'flex',
        flexDirection: 'column',
    },
    userFollower: {
        marginTop: '4rem',
        width: '90%',
        alignSelf: 'center',
    },
    charts: {
        width: '90%',
        alignSelf: 'center',
    },
    repoInfo: {
        width: '90%',
        alignSelf: 'center',
    },
    loaderContainer: {
        position: 'absolute',
        display: 'flex',
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
    },
    box: {
        marginRight: '25rem',
        display: 'flex',
        alignItems: 'center',
        width: '8.5%',
        justifyContent: 'space-between',
    },
}));

function Dashboard() {
    const classes = useStyles();
    const { setisDark, isDark } = useGlobalContext();
    const { curTheme } = useTheme();
    const { loginWithRedirect, isAuthenticated, user, isLoading, logout } =
        useAuth0();

    console.log({ isLoading, isAuthenticated, user });

    const handleClick = () => {
        setisDark(!isDark);
    };

    const isUser = isAuthenticated && user;

    return (
        <div>
            <div
                className={classes.root}
                style={{
                    backgroundColor: isDark && curTheme.background,
                }}>
                {/* Nav Bar */}
                <AppBar
                    position='static'
                    color='primary'
                    style={{ backgroundColor: isDark && '#555' }}>
                    <Toolbar>
                        <Typography variant='h6' className={classes.title}>
                            GitHub Users Club
                        </Typography>
                        <div className={classes.box}>
                            {isUser && (
                                <>
                                    <Avatar className={classes.img}>
                                        <img
                                            src={user.picture}
                                            alt={user.name}
                                            height='100%'
                                            width='100%'
                                        />
                                    </Avatar>

                                    <div>
                                        <Typography
                                            variant='h7'
                                            className={classes.title}>
                                            {user.given_name}
                                        </Typography>
                                    </div>
                                </>
                            )}
                        </div>
                        <IconButton
                            className={classes.icon}
                            onClick={handleClick}>
                            {isDark ? (
                                <HiOutlineMoon
                                    style={{ color: 'whitesmoke' }}
                                />
                            ) : (
                                <BiSun style={{ color: 'white' }} />
                            )}
                        </IconButton>

                        <Button
                            variant='contained'
                            color='secondary'
                            onClick={() => {
                                logout({ returnTo: window.location.origin });
                            }}>
                            Logout
                        </Button>
                    </Toolbar>
                </AppBar>

                {/* Theme Provider */}

                {/* Components */}
                <div className={classes.searchContainer}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Search></Search>
                        </Grid>
                    </Grid>
                </div>

                <React.Fragment>
                    <div className={classes.repoInfo}>
                        <RepoInfo />
                    </div>
                    {/* user info and followers */}
                    <div className={classes.userFollower}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={5}>
                                <User />
                            </Grid>
                            <Grid item xs={0} md={1}></Grid>
                            <Grid item xs={12} md={6}>
                                <Followers />
                            </Grid>
                        </Grid>
                    </div>
                    {/* Charts */}
                    <div className={classes.charts}>
                        <Repos />
                    </div>
                </React.Fragment>
            </div>
        </div>
    );
}

export default Dashboard;
