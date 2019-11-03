import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { css } from '@emotion/core';
import BlockContent from '@sanity/block-content-to-react';

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import PageTitle from '../components/styledComponents/PageTitle';
import ContentWidthContainer from '../components/styledComponents/ContentWidthContainer';


const content = css`
  padding: 5%;
`;

const AboutPage = () => {
  // const {allSanityQuote: { edges }} = useStaticQuery(
  //   graphql`
  //     query QuoteQuery {
  //       allSanityQuotes {
  //         edges {
  //           node {
  //             id
  //             quote
  //             referrer
  //           }
  //         }
  //       }
  //     }
  //   `
  // )
  // const allQuotes = edges.map(show => show.node);

  const { allSanityQuotes, allSanityBiography }  = useStaticQuery(
    graphql`
      query AboutMeQuery {
        allSanityQuotes {
          edges {
            node {
              id
              quote
              referrer
            }
          }
        }
        allSanityBiography {
          edges {
            node {
              id
              title
              _rawBiography(resolveReferences: {maxDepth: 10})
            }
          }
        }
      }
    `
  )

  const serializers = {
    types: {
      code: props => (
        <pre data-language={props.node.language}>
          <code>{props.node.code}</code>
        </pre>
      )
    }
  }

  const allQuotes = allSanityQuotes.edges.map(show => show.node);
  const bioTitle = allSanityBiography.edges[0].node.title;
  const quote = allSanityBiography.edges[0].node._rawBiography[0].children[0].text;
  console.log(quote);
  return (
  <Layout>
    <SEO title="About" />
    <ContentWidthContainer css={css`margin-top: 100px;`}>
      <PageTitle pageTitle={'About'} />
      <div css={content}>
        <h2 css={css`text-align: center; text-transform: uppercase;`}>{bioTitle}</h2>
        <h3 css={css`text-align: center; padding: 0rem 0 2rem 0;`}>
          <BlockContent blocks={allSanityBiography.edges[0].node._rawBiography} serializers={serializers} />
        </h3>
        {allQuotes.map(quote => (
          <div css={css`margin-top: 1.5rem;`}>
            <p css={css`text-align: center; font-style: italic;`}>{`"${quote.quote}"`}</p>
            <p css={css`text-align: center; font-weight: 700;`}>{`-${quote.referrer}`}</p>
          </div>
        ))}
      </div>
    </ContentWidthContainer>
  </Layout>
)}

export default AboutPage
