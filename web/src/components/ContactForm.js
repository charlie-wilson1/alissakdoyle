import React from 'react';
import { css } from '@emotion/core';

const form = css`
  box-sizing: border-box;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  label {
    font-size: 1.2rem;
    font-weight: 500;
    padding: 0 0 0.4rem 0;
  }

  input, textarea {
    padding: 0.4rem;
    margin-bottom: 0.5rem;
    background-color: #eee;
    transition: background-color 0.5s, height 1s;
    border: 1px solid #eee;
    height: 1.2rem;
  }

  input:focus, textarea:focus {
    background-color: white;
    transition: background-color 0.5s, height 1s;
    border: 1px solid lightgray;
    outline: none;
    border-radius: 0.5rem;
  }
  textarea:focus {
    height: 8rem;
  }
  .container {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    border-radius: 0.5rem;
    transition: box-shadow 0.3s;
  }
  .container:focus-within {
    box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.25);
    transition: box-shadow 0.3s;
  }
  #submit {
    margin: 1rem;
    height: 3rem;
  }
`;

const ContactForm = () => {
  return (
      <form css={form}>
        <div className='container'>
          <label for="first-name">First Name</label>
          <input type='text' name='first-name'></input>
        </div>

        <div className='container'>
          <label for="last-name">Last Name</label>
          <input type='text' name='last-name'></input>
        </div>

        <div className='container'>
          <label for="email">Email Address</label>
          <input type='email' name='email'></input>
        </div>

        <div className='container'>
          <label for="subject">Subject</label>
          <input type='text' name='subject'></input>
        </div>

        <div className='container'>
          <label for="message">Message</label>
          <textarea type='text' name='mssage'></textarea>
        </div>
        <input id='submit' type='submit'></input>
      </form>
  );
};

export default ContactForm;