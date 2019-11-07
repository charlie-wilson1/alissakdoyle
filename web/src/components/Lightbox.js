import React, { useState } from 'react';
import { css } from '@emotion/core';
import Img from "gatsby-image";

const lightboxShown = css`
  position: fixed;
  top: 0; 
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 10;
  background-color: rgb(0, 0, 0, 0.9);
  transition: background-color 1s;
  display: flex;
  justify-content: center;
  align-items: center;
  .lightboxImage {
    width: 500px;
    height: 750px;
    background-color: white;
  }
`;

const lightboxHidden = css`
  position: relative;
  height: 100px;
  width: 100px;
  transition: background-color 1s;
  .lightboxImage {
    width: 100%;
    height: 100%;
  }
`;

const Lightbox = (props) => {
  const [lightbox, toggleLightbox] = useState(false);
  const lightboxImage = props.image || null;
  return (
    <div css={lightbox ? lightboxShown : lightboxHidden} {...props} onClick={(e) => {toggleLightbox(!lightbox); console.log(lightbox, e.currentTarget)}}>
      {lightboxShown && (
        <div className='lightboxImage'>
          {!lightbox && props.children}
          <Img fixed={lightboxImage} id={lightboxImage}></Img>
        </div>
      )}
    </div>
  );
};

export default Lightbox;