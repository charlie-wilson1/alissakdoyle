import React from 'react';
import { Link } from "gatsby"
import { css } from '@emotion/react';

const navStyles = css`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  height: 60px;
  width: inherit;
  background-color: white;
  border-bottom: 1px solid lightgray;
  text-transform: uppercase;
  z-index:2;
  h3 {
    font-size: 0.9em;
    margin: 0 1rem;
  }
  a {
    text-decoration: none;
    color: #343434;
  }
  @media screen and (max-width: 380px) {
    h1 {
      font-size: 0.8em;
    }
    h3 {
      font-size: 0.7em;
      margin: 0 0.6rem;
    }
  }
`;

const Nav = () => {
  return (
    <nav css={navStyles}>
      <Link to='/'><h3>Resume</h3></Link>
      <Link to='/about'><h3>About</h3></Link>
      <Link to='/gallery'><h3>Gallery</h3></Link>
      <Link to='/contact'><h3 css={css`text-align: center;`}>Contact Me</h3></Link>
    </nav>
  );
};

export default Nav;