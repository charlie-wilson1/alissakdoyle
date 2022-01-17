import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { css } from '@emotion/react'

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Image from '../components/Image';
import PageTitle from '../components/styledComponents/PageTitle';
import PageH1 from '../components/styledComponents/PageH1';
import Performance from '../components/Performance';
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

const ActorPage = () => {
  const { allSanityPerformance } = useStaticQuery(
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
      }
    `
  )
  const allShows = allSanityPerformance.edges.map(show => show.node).sort((a, b) => {
    return (a.startDate > b.startDate) ? -1 : ((a.startDate < b.startDate) ? 1 : 0);
  });

  return (
    <Layout>
      <Seo title="Actor" />
      <ContentWidthContainer>
        <div css={shrinkingImage}>
          <Image />
        </div>
        <PageTitle pageTitle={'Actor'} />
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
        </div>
      </ContentWidthContainer>
    </Layout>
  )
}

export default ActorPage
