import React from "react"
// import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import { css } from '@emotion/core';

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Image from '../components/Image';
import PageTitle from '../components/styledComponents/PageTitle';
import PageH1 from '../components/styledComponents/PageH1';
import Performance from '../components/Performance';

const shrinkingImage = css`
  position: relative;
  height: 300px;
  width: inherit;
  overflow: hidden;
  background-color: green;
`;

const content = css`
  padding: 5%;
`;

const IndexPage = () => {
  const {allSanityShow: { edges }} = useStaticQuery(
    graphql`
      query AllShows {
        allSanityShow {
          edges {
            node {
              id
              title
              role
              theatre
              director
            }
          }
        }
      }
    `
  )
  const allShows = edges.map(show => show.node);
  
  return (
  <Layout>
    <SEO title="Home" />
    <div>
      <div css={shrinkingImage}>
        <Image />
      </div>
      <PageTitle pageTitle={'Resume'} />
      <div css={content}>
        <PageH1 text={'Regional Theatre'} />
        {allShows.map(show => (
          <Performance
            id={show.id}
            title={show.title}
            theatre={show.theatre}
            role={show.role}
            director={show.director}
          />
        ))}
        <PageH1 text={'Teaching & Directing'} />
        <PageH1 text={'Education & Training'} />
      </div>
    </div>
    
  </Layout>
)}

export default IndexPage
