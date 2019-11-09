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
  position: relative;

  .photo {
    position: relative;
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
                  thumbnail: fixed(width: 300, height: 300) {
                    src
                    srcSet
                    srcSetWebp
                    srcWebp
                    aspectRatio
                    base64
                    height
                    width
                  }
                  mobile: fixed(width: 300) {
                    src
                    srcSet
                    srcSetWebp
                    srcWebp
                    aspectRatio
                    base64
                    height
                    width
                  }
                  tablet: fixed(width: 450) {
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

  return (
    <Layout>
      <SEO title="About" />
      <ContentWidthContainer css={css`margin-top: 100px;`}>
        <PageTitle pageTitle={'Gallery'} />
        <div css={content}>
          <div css={gallery}>
            {galleryImages.allSanityGallery.edges.map(edge => (
              <div className='photo' key={edge.node.id}>
                <Lightbox imageAssets={edge.node.galleryImage.asset} />
                <Img 
                  fixed={edge.node.galleryImage.asset.thumbnail}
                  imgStyle={{
                    padding: '5px',
                    boxSizing: 'border-box',
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </ContentWidthContainer>
    </Layout>
)}

export default GalleryPage;
