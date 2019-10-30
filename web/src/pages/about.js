import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { css } from '@emotion/core';

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import PageTitle from '../components/styledComponents/PageTitle';
import ContentWidthContainer from '../components/styledComponents/ContentWidthContainer';


const content = css`
  padding: 5%;
`;

const AboutPage = () => {
  const {allSanityQuote: { edges }} = useStaticQuery(
    graphql`
      query MyQuery {
        allSanityQuote {
          edges {
            node {
              id
              quote
              referrer
            }
          }
        }
      }
    `
  )
  const allQuotes = edges.map(show => show.node);
  
  return (
  <Layout>
    <SEO title="About" />
    <ContentWidthContainer css={css`margin-top: 100px;`}>
      <PageTitle pageTitle={'About'} />
      <div css={content}>
        <h3>Quote DUMP</h3>
        {allQuotes.map(quote => (
          <p>{`${quote.id} ${quote.quote} ${quote.referrer}`}</p>
        ))}
      </div>
    </ContentWidthContainer>
  </Layout>
)}

export default AboutPage
