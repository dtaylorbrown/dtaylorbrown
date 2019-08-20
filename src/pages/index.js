import React from "react"
import styled from 'styled-components';

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const H1 = styled.h1`
  color: rebeccapurple;
`;

const PTag = styled.p`
  color: rebeccapurple;
`;

const StyledWrap = styled.div`
  max-width: 300px;
  margin-bottom: 1.45rem;
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <H1>Hi people</H1>
    <PTag>Welcome to your new Gatsby site.</PTag>
    <PTag>Now go build something great.</PTag>
    <StyledWrap>
      <Image />
    </StyledWrap>
  </Layout>
)

export default IndexPage
