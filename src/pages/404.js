import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import config from '../content/meta/config';

import Footer from '../components/Footer';
import Article from '../components/Article';
import Layout from '../components/Layout';
import Heading from '../components/Heading';
import BodyText from '../components/BodyText';
import Seo from '../components/Seo';

const NotFoundPage = props => {
  const {
    data: {
      notFound: { html: notFoundHTML },
    },
  } = props;

  const { siteTitlePostfix, siteUrl } = config;

  return (
    <Layout>
      <Article narrow>
        <Heading title="404" />
        <BodyText smallerImg html={notFoundHTML} />
      </Article>
      <Footer />
      <Seo
        url={siteUrl}
        title={`Not Found${siteTitlePostfix}`}
        description="The requested page was not found"
      />
    </Layout>
  );
};

NotFoundPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default NotFoundPage;

export const query = graphql`
  query {
    notFound: markdownRemark(
      fileAbsolutePath: { regex: "/content/parts/notFound/" }
    ) {
      html
    }
  }
`;
