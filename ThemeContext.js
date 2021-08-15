import React, { useContext } from 'react';

export const themes = {
    dark: {
        color: 'white',
        background: '#444',
    },
    light: {
        background: '#fafafa',
    },
};

const ThemeContext = React.createContext(themes.light);

export const ThemeProvider = ({ children }) => {
    return (
        <ThemeContext.Provider value={{ curTheme: themes.dark }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    return useContext(ThemeContext);
};
