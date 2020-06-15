import React from 'react';
import styled from 'styled-components';

const StyledArticle = styled.article`
    max-width: 1240px;
    width: 100%;
    padding: 0 30px;
    margin: 0 auto;
    img {
        width: 100%;
        height: 600px;
        object-fit: cover;
        margin-bottom: 30px;
    }
    p {
        max-width: 1040px;
        margin: 0 auto 30px;
        font-size: 16px;
        line-height: 1.4;
    }
`;

const Article = ({ content }) => {
    return <StyledArticle dangerouslySetInnerHTML={{ __html: content }} />;
};

export default Article;
