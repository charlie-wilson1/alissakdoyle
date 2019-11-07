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
  transition: background-color 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const lightboxHidden = css`
  position: relative;
  height: 100%;
  width: 100%;
  transition: background-color 0.3s;
`;

const Lightbox = (props) => {
  const [lightbox, toggleLightbox] = useState(false);
  const lightboxImage = props.image || null;
  return (
    <div css={lightbox ? lightboxShown : lightboxHidden} {...props} onClick={(e) => {toggleLightbox(!lightbox); console.log(lightbox, e.currentTarget)}}>
      {lightboxShown && (
        <>
          {!lightbox && props.children}
          <Img fixed={props.image} id={lightboxImage}></Img>
        </>
      )}
    </div>
  );
};

export default Lightbox;