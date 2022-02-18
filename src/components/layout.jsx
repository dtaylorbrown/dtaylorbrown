import React, { useState, useEffect } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import Nav from './nav';
import themeStyles from '../theme';

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${props => props.theme.colors.background};
    font-family: ${props => props.theme.font.typeface};
    font-size: ${props => props.theme.font.size};
  }
`;

const Layout = ({ children, pageTitle }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        setIsDarkMode(
            localStorage.getItem('isDarkMode') === 'true' ? true : false
        );
    }, []);

    const theme = isDarkMode ? themeStyles.dark : themeStyles.light;

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles theme={theme} />
            <title>{pageTitle} - DTB</title>
            <button
                onClick={() => {
                    setIsDarkMode(!isDarkMode);
                    localStorage.setItem('isDarkMode', !isDarkMode);
                }}
            >
                {isDarkMode ? 'Set Light Mode' : 'Set Dark Mode'}
            </button>
            <Nav />
            {children}
        </ThemeProvider>
    );
};

export default Layout;
