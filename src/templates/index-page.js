import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import HeaderImage from "../img/header_image.png";
import Navbar from "../components/Navbar"

import Layout from "../components/Layout";
//import BlogRoll from "../components/BlogRoll";

// eslint-disable-next-line
export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => {

  return (
    <main className="main">
      <img src={HeaderImage} alt="Header Graphic" />
      <Navbar />
      <section className="main-section">
        <h1 className="main-title">Adventures in Web Design</h1>
        <p className="para blog-para para-home">Welcome to my blog. Follow me along my journey to making the web a more beautiful place.</p>
        <p className="para blog-para para-home">Starting from the basics with HTML and working up to add functionality with JS and making it lookgood with CSS.</p>
        <Link to="/blog"><button className="btn-blog center pointer">Go to Blog</button></Link>
      </section>
    </main>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
