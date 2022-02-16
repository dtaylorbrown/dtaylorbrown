import * as React from 'react';
import styled from 'styled-components';

import Nav from '../components/nav';

const Main = styled.main`
    color: #232129;
    padding: 96px;
    font-family: 'Karla';
`;

const Heading = styled.h1`
    margin-top: 0;
    margin-bottom: 32px;
    max-width: 320px;
`;

const SnapsPage = () => {
    return (
        <Main>
            <title>Snaps</title>
            <Nav />
            <Heading>📷 Snaps - photo bits</Heading>
        </Main>
    );
};

export default SnapsPage;
