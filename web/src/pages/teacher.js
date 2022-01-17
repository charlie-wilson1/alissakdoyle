import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { css } from '@emotion/core';

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Image from '../components/Image';
import PageTitle from '../components/styledComponents/PageTitle';
import PageH1 from '../components/styledComponents/PageH1';
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

const TeacherPage = () => {
  const { allSanityDirecting } = useStaticQuery(
    graphql`
      query AllDirecting {
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

  const allDirecting = allSanityDirecting.edges.map(direct => direct.node).sort((a, b) => {
    return (a.startDate > b.startDate) ? -1 : ((a.startDate < b.startDate) ? 1 : 0);
  });

  return (
    <Layout>
      <SEO title="Teacher" />
      <ContentWidthContainer>
        <div css={shrinkingImage}>
          <Image />
        </div>
        <PageTitle pageTitle={'Teacher'} />
        <div css={css`padding: 5%;`}>
          <PageH1 text={'Teaching & Directing'} />
          {allDirecting.map(gig => (
            <DirectingGig
              title={gig.title}
              theatre={gig.theatre}
              role={gig.role}
            />
          ))}
        </div>
      </ContentWidthContainer>
    </Layout>
  )
}

export default TeacherPage
