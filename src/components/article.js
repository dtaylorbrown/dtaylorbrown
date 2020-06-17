import React from 'react';
import styled from 'styled-components';

const StyledArticle = styled.article`
    max-width: 960px;
    width: 100%;
    padding: 0 30px;
    margin: 0 auto 60px;
    padding-bottom: 60px;
    border-bottom: 1px solid #f5f5f5;
    font-family: 'PT Sans', sans-serif;
    figure {
        text-align: center;
    }
    img {
        width: 80%;
        height: 540px;
        object-fit: cover;
        margin-bottom: 30px;
    }
    p {
        max-width: 1040px;
        margin: 0 auto 30px;
        font-size: 20px;
        line-height: 1.4;
        &:last-child {
            margin-bottom: 0;
        }
    }
    ul {
        list-style-type: initial;
        margin-left: 50px;
        margin-bottom: 30px;
        li {
            font-size: 20px;
            line-height: 1.4;
        }
    }
    strong {
        font-weight: bold;
    }
`;

const Article = ({ content }) => {
    return <StyledArticle dangerouslySetInnerHTML={{ __html: content }} />;
};

export default Article;
