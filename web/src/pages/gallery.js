import React from "react"
import { css } from '@emotion/core';

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import PageTitle from '../components/styledComponents/PageTitle';
import ContentWidthContainer from '../components/styledComponents/ContentWidthContainer';
import Image from '../components/Image';


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
    border: 1px solid black;
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
          <div className='photo'><Image /></div>
          <div className='photo'><Image /></div>
          <div className='photo'><Image /></div>
          <div className='photo'><Image /></div>
          <div className='photo'><Image /></div>
          <div className='photo'><Image /></div>
        </div>
      </div>
    </ContentWidthContainer>
  </Layout>
)}

export default GalleryPage;
