import * as React from "react";
import { Helmet } from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import HeaderImage from "../img/header_image.png";


const TagRoute = (props) =>  {

    const posts = props.data.allMarkdownRemark.edges;

    const postLinks = posts.map((post) => (
      <li key={post.node.fields.slug}>
        <Link to={post.node.fields.slug}>
          <h2 className="is-size-2">{post.node.frontmatter.title}</h2>
        </Link>
      </li>
    ));

    const { tag } = props.pageContext;
    const { title } = props.data.site.siteMetadata;
    const { totalCount } = props.data.allMarkdownRemark;
    const tagHeader = `${totalCount} post${
      totalCount === 1 ? "" : "s"
    } tagged with “${tag}”`;

    return (
      <Layout>
        <main className="individual-tag-main">
          <img src={HeaderImage} alt="Header Graphic" className="header-graphic" />
          <p className="see-all">
            <Link to="/tags/">See all tags</Link>
          </p>    
          
          <section className="individual-tag-section">
            <Helmet title={`${tag} | ${title}`} />
            
            <article className="individual-tag">
              <h3 className="individual-tag-title">{tagHeader}</h3>
              <ul className="individual-tag">{postLinks}</ul>
            </article>
          </section>
        </main>
      </Layout>
    );
}

export default TagRoute;

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
