import React from "react"
import { css } from '@emotion/core';

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import PageTitle from '../components/styledComponents/PageTitle';
import ContentWidthContainer from '../components/styledComponents/ContentWidthContainer';
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import Lightbox from '../components/Lightbox';

const content = css`
  padding: 5%;
`;

const gallery = css`
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  justify-content: center;

  .photo {
    box-sizing: border-box;
    height: 280px;
    width: 280px;
    margin: 1%;
    overflow: hidden;
  }

  /* @media screen and (max-width: 650px) {
    .photo { width: 500px; }
  } */
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
                  small: fixed(width: 300, height: 300) {
                    src
                    srcSet
                    srcSetWebp
                    srcWebp
                    aspectRatio
                    base64
                    height
                    width
                  }
                  large: fixed(width: 600) {
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
            <div className='photo' id={edge.node.id}>
              <Lightbox image={edge.node.galleryImage.asset.large}>
                <Img fixed={edge.node.galleryImage.asset.small} id={edge.node.id}></Img>
              </Lightbox>
            </div>
          ))}
        </div>
      </div>
    </ContentWidthContainer>
  </Layout>
)}

export default GalleryPage;
