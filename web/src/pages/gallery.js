import React from "react"
import { css } from '@emotion/core';

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import PageTitle from '../components/styledComponents/PageTitle';
import ContentWidthContainer from '../components/styledComponents/ContentWidthContainer';
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image"

const content = css`
  padding: 5%;
`;

const gallery = css`
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  justify-content: center;

  .photo {
    background-color: green;
    box-sizing: border-box;
    height: 200px;
    width: 30%;
    margin: 1%;
    overflow: hidden;
  }

  @media screen and (max-width: 800px) {
    .photo { width: 45%; }
  }
  @media screen and (max-width: 500px) {
    .photo { width: 80%; }
  }
  @media screen and (max-width: 400px) {
    .photo { width: 90%; }
  }
`;

const GalleryPage = () => {

  const galleryImages = useStaticQuery(
    graphql`
      query GalleryQuery {
        allSanityGallery {
          edges {
            node {
              id
              galleryImage {
                asset {
                  fixed(height: 300, width: 300) {
                    src
                    srcSet
                    srcSetWebp
                    srcWebp
                    aspectRatio
                    base64
                    height
                    width
                  }
                }
              }
            }
          }
        }
      }
    `
  )
  console.log(galleryImages);
  return (
  <Layout>
    <SEO title="About" />
    <ContentWidthContainer css={css`margin-top: 100px;`}>
      <PageTitle pageTitle={'Gallery'} />
      <div css={content}>
        <div css={gallery}>
          {galleryImages.allSanityGallery.edges.map(edge => (
            <div className='photo'>
              <Img fixed={edge.node.galleryImage.asset.fixed}></Img>
            </div>
          ))}
        </div>
      </div>
    </ContentWidthContainer>
  </Layout>
)}

export default GalleryPage;
