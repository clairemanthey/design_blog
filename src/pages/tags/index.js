import * as React from "react";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../../components/Layout";
import HeaderImage from "../../img/header_image.png";

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <Layout>
    <Helmet title={`Tags | ${title}`} />
  <main className="all-tag-main">
      <img src={HeaderImage} alt="Header Graphic" className="header-graphic" />
    <section >
        <div className="all-tags-container">
            <h1 className="center all-tags-title">Tags</h1>
            <ul className="all-taglist">
              {group.map((tag) => (
                <li key={tag.fieldValue} className="all-tags-tag">
                  <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                    {tag.fieldValue} ({tag.totalCount})
                  </Link>
                </li>
              ))}
            </ul>
        </div>
    </section>
    </main>
  </Layout>
);

export default TagsPage;

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
