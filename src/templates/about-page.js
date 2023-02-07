import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";




const AboutPage = ({ data }) => {
  return (
    <Layout>
      <h1>ABOUT ME!!</h1>
    </Layout>
  );
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
