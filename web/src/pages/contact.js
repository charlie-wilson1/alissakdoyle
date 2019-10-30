import React from "react"
import { css } from '@emotion/core';

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import PageTitle from '../components/styledComponents/PageTitle';
import ContentWidthContainer from '../components/styledComponents/ContentWidthContainer';
import ContactForm from '../components/ContactForm';

const content = css`
  padding: 5%;
`;

const ContactPage = () => {
  return (
  <Layout>
    <SEO title="Contact" />
    <ContentWidthContainer css={css`margin-top: 100px;`}>
      <PageTitle pageTitle={'Contact'} />
      <div css={content}>
        <ContactForm />
      </div>
    </ContentWidthContainer>
  </Layout>
)}

export default ContactPage
