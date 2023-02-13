import * as React from "react";
import Navbar from "../../components/Navbar"
import HeaderImage from "../../img/header_image.png";


import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <main className="blog-roll-main">
          <img src={HeaderImage} alt="Header Graphic" />
          <Navbar />
          <div className="bolg-roll-header">
            <h1 className="blog-roll-title center">All Posts</h1>
          </div>
          <section className="section blog-roll-section">
            <div className="container blog-roll-container">
              <div className="content blog-roll-content">
                <BlogRoll />
              </div>
            </div>
          </section>
        </main>
      </Layout>
    );
  }
}
