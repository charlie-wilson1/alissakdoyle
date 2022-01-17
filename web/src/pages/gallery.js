import React from "react"
import { css } from '@emotion/react';

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import PageTitle from '../components/styledComponents/PageTitle';
import ContentWidthContainer from '../components/styledComponents/ContentWidthContainer';
import { useStaticQuery, graphql } from "gatsby";
// import Img from "gatsby-image";
import { GatsbyImage } from "gatsby-plugin-image"
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
    width: 300px;
  }
`;

const GalleryPage = () => {

  const galleryData = useStaticQuery(
    graphql`
      query GalleryQuery {
        allSanityGallery {
          edges {
            node {
              id
              galleryImage {
                asset {
                  id
                  url
                  gatsbyImageData
                  thumbnail: gatsbyImageData(height: 300, width: 300)
                  mobile: gatsbyImageData(width: 300)
                  tablet: gatsbyImageData(width: 450)
                  large: gatsbyImageData(width: 600)
                }
              }
            }
          }
        }
      }
    `
  );
  const galleryImages = galleryData.allSanityGallery.edges[0].node.galleryImage;

  return (
    <Layout>
      <SEO title="About" />
      <ContentWidthContainer css={css`margin-top: 100px;`}>
        <PageTitle pageTitle={'Gallery'} />
        <div css={content}>
          <div css={gallery}>
            {galleryImages && galleryImages.map(image => (
              <div className='photo' key={image.id}>
                <Lightbox imageAssets={image.asset} />
                <GatsbyImage
                  image={image.asset.gatsbyImageData}
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
    </Layout >
  )
}

export default GalleryPage;


// NEED TO MOVE FIXED IMAGE TO GATSBY IMAGE (has to for fetching data)