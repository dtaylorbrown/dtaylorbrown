import * as React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';

const Main = styled.main`
    color: ${props => props.theme.colors.primaryDark};
    padding: 96px;
`;

const Heading = styled.h1`
    margin-top: 0;
    margin-bottom: 32px;
    max-width: 320px;
`;

const WorkPage = () => {
    return (
        <Layout pageTitle="Work">
            <Main>
                <Heading>💻 Work - CV bits</Heading>
            </Main>
        </Layout>
    );
};

export default WorkPage;
