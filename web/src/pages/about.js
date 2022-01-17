import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { css } from '@emotion/core';
import BlockContent from '@sanity/block-content-to-react';

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import PageTitle from '../components/styledComponents/PageTitle';
import PageH1 from '../components/styledComponents/PageH1';
import ContentWidthContainer from '../components/styledComponents/ContentWidthContainer';

const AboutPage = () => {

  const { allSanityQuotes, allSanityBiography } = useStaticQuery(
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

  const allQuotes = allSanityQuotes.edges ? allSanityQuotes.edges.map(show => show.node) : false;
  const bioTitle = allSanityBiography.edges[0].node.title || null;
  const bioContent = allSanityBiography.edges[0].node._rawBiography || null;

  return (
    <Layout>
      <SEO title="About" />
      <ContentWidthContainer css={css`margin-top: 100px;`}>
        <PageTitle pageTitle={'About'} />
        <div css={css`padding: 5%;`}>
          <h2 css={css`text-align: center; text-transform: uppercase;`}>{bioTitle}</h2>
          <h3 css={css`text-align: center; padding: 0rem 0 2rem 0;`}>
            <BlockContent blocks={bioContent} serializers={serializers} />
          </h3>
          <PageH1 text={'In The Media'} />
          {allQuotes && allQuotes.map(quote => (
            <div css={css`margin-top: 1.5rem;`}>
              <p css={css` font-style: italic; font-weight: 700; font-size: 1.1rem`}>{`"${quote.quote}"`}</p>
              <p css={css`padding-left:3rem;`}>{`-${quote.referrer}`}</p>
            </div>
          ))}
          <PageH1 text={'Education & Training'} />
          <div css={css`p {margin: 0.6rem 0;}`}>
            <p css={css`font-weight: 800;`}>Bachelor of Arts, Theatre</p>
            <p css={css`padding-left:1rem;`}>Emphasis in Acting</p>
            <p css={css`padding-left:1rem;`}>California State University Sacramento</p>
          </div>
        </div>
      </ContentWidthContainer>
    </Layout>
  )
}

export default AboutPage
