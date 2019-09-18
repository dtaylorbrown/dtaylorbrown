import React from "react"
import styled from 'styled-components';

import Layout from "../components/layout"
import SEO from "../components/seo"

const H1 = styled.h1`
`;

const PTag = styled.p`
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <H1>Hi people</H1>
    <PTag>Welcome to your new Gatsby site.</PTag>
    <PTag>Now go build something great.</PTag>
  </Layout>
)

export default IndexPage
