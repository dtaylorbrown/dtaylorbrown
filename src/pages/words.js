import * as React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';

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

const WordsPage = () => {
    return (
        <Layout pageTitle="Words">
            <Main>
                <Heading>📚 Words - some blog bits</Heading>
            </Main>
        </Layout>
    );
};

export default WordsPage;
