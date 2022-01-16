import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { jsx } from '@emotion/react'
import { css } from '@emotion/react'

import Layout from "../components/Layout"
// import SEO from "../components/SEO"
import Image from '../components/Image';
import PageTitle from '../components/styledComponents/PageTitle';
import PageH1 from '../components/styledComponents/PageH1';
import Performance from '../components/Performance';
import DirectingGig from '../components/DirectingGig';
import ContentWidthContainer from '../components/styledComponents/ContentWidthContainer';

const shrinkingImage = css`
  position: relative;
  height: 600px;
  width: inherit;
  overflow: hidden;
  @media screen and (max-width: 700px) {
    height: 400px;
  }
  @media screen and (max-width: 500px) {
    height: 250px;
  }
  @media screen and (max-width: 375px) {
    height: 200px;
  }
`;

const IndexPage = () => {
  const {allSanityPerformance, allSanityDirecting} = useStaticQuery(
    graphql`
      query AllPerformances {
        allSanityPerformance {
          edges {
            node {
              id
              title
              role
              theatre
              director
              startDate
            }
          }
        }
        allSanityDirecting {
          edges {
            node {
              id
              startDate
              theatre
              title
              role
            }
          }
        }
      }
    `
  )
  const allShows = allSanityPerformance.edges.map(show => show.node).sort((a, b) => {
    return (a.startDate > b.startDate) ? -1 : ((a.startDate < b.startDate) ? 1 : 0);
  });

  const allDirecting = allSanityDirecting.edges.map(direct => direct.node).sort((a, b) => {
    return (a.startDate > b.startDate) ? -1 : ((a.startDate < b.startDate) ? 1 : 0);
  });

  return (
  <Layout>
    {/* <SEO title="Home" /> */}
    <ContentWidthContainer>
      <div css={shrinkingImage}>
        <Image />
      </div>
      <PageTitle pageTitle={'Resume'} />
      <div css={css`padding: 5%;`}>
        <PageH1 text={'Regional Theatre'} />
          {allShows.map(show => (
            <Performance
              id={show.id}
              title={show.title}
              theatre={show.theatre}
              role={show.role}
              director={show.director}
              key={show.id}
            />
          ))}
        <PageH1 text={'Teaching & Directing'} />
          {allDirecting.map(gig => (
            <DirectingGig 
              title={gig.title}
              theatre={gig.theatre}
              role={gig.role}
            />
          ))}
        <PageH1 text={'Education & Training'} />
        <div css={css`p {margin: 0.6rem 0;}`}>
          <p css={css`font-weight: 800;`}>Bachelor of Arts, Theatre</p>
          <p>Emphasis in Acting</p>
          <p>California State University Sacramento</p>
        </div>
      </div>
    </ContentWidthContainer>  
  </Layout>
)}

export default IndexPage
