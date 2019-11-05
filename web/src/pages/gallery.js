import React from "react"
import { css } from '@emotion/core';

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import PageTitle from '../components/styledComponents/PageTitle';
import ContentWidthContainer from '../components/styledComponents/ContentWidthContainer';


const content = css`
  padding: 5%;
`;

const gallery = css`
  display: flex;
  flex-wrap: wrap;
  .photo {
    background-color: green;
    box-sizing: border-box;
    border: 1px solid black;
    height: 200px;
    width: 33%;
    padding: 3%;
  }
`;

const GalleryPage = () => {

  return (
  <Layout>
    <SEO title="About" />
    <ContentWidthContainer css={css`margin-top: 100px;`}>
      <PageTitle pageTitle={'Gallery'} />
      <div css={content}>
        <p>photos here!</p>
        <div css={gallery}>
          <div className='photo'>this div content</div>
          <div className='photo'>this div content</div>
          <div className='photo'>this div content</div>
          <div className='photo'>this div content</div>
          <div className='photo'>this div content</div>
          <div className='photo'>this div content</div>
        </div>
      </div>
    </ContentWidthContainer>
  </Layout>
)}

export default GalleryPage;
