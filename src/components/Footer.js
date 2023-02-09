import * as React from "react";
import { Link } from "gatsby";

import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";

const Footer = () => {
  
    return (
      <footer className="footer">
     <article className="footer__article">
      <h3 className="footer__header">See My Work</h3>
      <ul className="footer__list">
        <li><a href="https://clairemakeswebsites.github.io./">Website</a></li>
        <li><a href="https://codepen.io/aglaea">Codepen</a></li>
        <li><a href="https://github.com/clairemanthey">Github</a></li>
      </ul>
     </article>
     <article className="footer__article">
      <h3 className="footer__header">Contact</h3>
      <ul className="footer__list">
        <li><a href="mailto:clairemakes@gmail.com">email</a></li>
        <li><a href="https://www.linkedin.com/in/claire-manthey-4389a622/">LinkedIn</a></li>
        <li><a href="https://twitter.com/claire_makes">Twitter</a></li>
      </ul>
     </article>
      </footer>
    );
};

export default Footer;
