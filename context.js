import React, { useState, useEffect, useContext } from 'react';
import mockUSers from './mockData/mockUSers';
import mockRepos from './mockData/mockRepos';
import mockFollowers from './mockData/mockFollowers';
import axios from 'axios';

let mainUrl = 'https://api.github.com/';

export const AppContext = React.createContext();

// https://api.github.com/users/gaearon/repos?per_page=100

export const AppProvider = ({ children }) => {
    // Set the user full data after getting all the data
    const [user, setuser] = useState({});
    const [repos, setrepos] = useState([]);
    const [followers, setfollowers] = useState([]);
    const [isLoading, setisLoading] = useState(true);
    const [rate, setrate] = useState(0);
    const [isDark, setisDark] = useState(false);
    const [submitCurUser, setsubmitCurUser] = useState('gaearon');
    const [isError, setisError] = useState(false);

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        getData();
    }, [submitCurUser]);

    const getData = async () => {
        await Promise.allSettled([
            axios.get(`${mainUrl}users/${submitCurUser}`),
            axios.get(
                `${mainUrl}users/${submitCurUser}/followers?per_page=100`
            ),
            axios.get(`${mainUrl}users/${submitCurUser}/repos?per_page=100`),
            axios.get(`${mainUrl}rate_limit`),
        ])
            .then((result) => {
                const [theUser, theFollowers, theRepos, theRate] = result;
                const status = 'fulfilled';

                setisLoading(true);
                if (
                    theUser.status === status &&
                    theFollowers.status === status &&
                    theRate.status === status
                ) {
                    setisLoading(true);
                    setuser(theUser.value.data);
                    setfollowers(theFollowers.value.data);
                    setrepos(theRepos.value.data);
                    setrate(theRate.value.data.rate.remaining);
                    setisLoading(false);
                } else {
                    setisError(true);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <AppContext.Provider
            value={{
                user,
                repos,
                followers,
                setsubmitCurUser,
                isLoading,
                rate,
                isDark,
                setisDark,
                isError,
                setisError,
            }}>
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};
