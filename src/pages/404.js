import * as React from "react";
import Layout from "../components/Layout";
import HeaderImage from "../img/header_image.png";
import { Link } from "gatsby";

const NotFoundPage = () => (
  <Layout>
    <main className="main-404">
      <img src={HeaderImage} alt="Header Graphic" />
      <section className="section-404">
        <h1 className="title-404">404 NOT FOUND</h1>
        <h2 className="subtitle-404 center">Find your way back</h2>
        <article className="link-container-404">
          <Link to="/"><h3 className="link-404">Home</h3></Link>
          <Link to="/blog"><h3 className="link-404">Blog</h3></Link>
          <Link to="/contact"><h3 className="link-404">Contact</h3></Link>
        </article>
      </section>
    </main>
  </Layout>
);

export default NotFoundPage;
