import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Header from './header';
import './layout.css';

const Constraint = styled.div`
    max-width: 1600px;
    width: 100%;
    margin: 0 auto;
`;

const Layout = ({ children }) => {
    return (
        <Constraint>
            <Header />
            <main>{children}</main>
        </Constraint>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
