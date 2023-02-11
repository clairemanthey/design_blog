import * as React from "react";
import Layout from "../../components/Layout";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-solid-svg-icons'
import HeaderImage from "../../img/header_image.png";
import Navbar from "../../components/Navbar"

export default class Index extends React.Component {
  render() {
    let first = "clairemakeswebsites";
    let second = Math.pow(2,6);
    let third = String.fromCharCode(second);
    let fourth = "gmail.com";
    let fifth = first + third + fourth;

    let CopyResume = () => {
        navigator.clipboard.writeText("clairemakeswebsites@gmail.com");
    }
    
    return (
      <Layout>
        <img src={HeaderImage} alt="Header Graphic" />
        <div className="contact-nav">
          <Navbar />
        </div>
        <main className="main_contact">

          <h1 className="contact_header lighter">Contact Me!</h1>
          <section className="email-section">
            <h2 className="lighter center">Email Me</h2>
            <div className="contact-container">
              <div className="email-container">
                {/* eslint-disable-next-line */}
                <p>{fifth}</p><button onClick={CopyResume} className="copy-btn">
                <FontAwesomeIcon icon={faCopy} size="2x" className="copy-icon" /></button>
              </div>
              <h3><a href="https://www.linkedin.com/in/claire-manthey-4389a622/">LinkedIn</a></h3>
            </div>
          </section>
          <section className="work-contianer">    
            <h2 className="lighter center">See More of My Work</h2>
            <div className="work-links">
              <h3 className="work-link"><a href="https://clairemakeswebsites.github.io" target="_blank" rel="noopener noreferrer">Website</a></h3>
              <h3 className="work-link"><a href="https://twitter.com/claire_makes" target="_blank" rel="noopener noreferrer">Twitter</a></h3>
              <h3 className="work-link"><a href="https://github.com/clairemanthey" target="_blank" rel="noopener noreferrer">Github</a></h3>
              <h3 className="work-link"><a href="https://codepen.io/aglaea" target="_blank" rel="noopener noreferrer">Codepen</a></h3>
            </div>
          </section>
        </main>




      </Layout>
    );
  }
}



