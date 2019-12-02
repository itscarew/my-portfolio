import React from "react"
import Layout from "../components/Layout"
import Head from "../components/Head"
import Footer from "../components/Footer"
import { graphql, useStaticQuery } from "gatsby"

const Resume = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <Layout>
      <Head title="About" />
      <div className="about">
        <div className="about__profile">
          <h1>Profile</h1>
          <h2>
            I'm {data.site.siteMetadata.author}. I'm a Front end Developer from
            Lagos, Nigeria
          </h2>
          <p>
            Innovative Front end developer with 2 years experience in building
            pixel-perfect Websites, Web apps, and UIs. I aim to make a the
            difference through my creative solution.
          </p>
          <p>
            Proficient in HTML, CSS, JavaScript and modern frameworks like
            React. A very passionate developer with good skills and
            understanding.
          </p>
          <a className="about__profile_myresume" download href="/resume.pdf">
            Check out my resume{" "}
          </a>
        </div>
        <div className="about__experience">
          <h1>Experience / Work</h1>
          <p>
            I'm currently a freelance developer who has been developing
            responsive and functional websites and web apps to meet my clients'
            needs.
          </p>
        </div>
        <div className="about__education">
          <h1>Education</h1>
          <ul>
            <li>
              I am currently schooling in NIIT which I'm going to have an{" "}
              <b>Honours Diploma</b> in Software Engineering (Master Mind
              Series).
            </li>
            <li>
              I have a <b> National Diploma</b> in Computer Science from Yaba
              College Of Technology.
            </li>
          </ul>
        </div>
        <div className="about__skills">
          <h1>Skills </h1>
          <div className="about__skills_html">
            <p>
              html - <small> 99% </small>
            </p>
            <span></span>
          </div>
          <div className="about__skills_css">
            <p>
              css / sass / tailwind / bootstrap - <small> 90% </small>
            </p>
            <span></span>
          </div>
          <div className="about__skills_javascript">
            <p>
              javascript - <small> 83% </small>
            </p>
            <span></span>
          </div>
          <div className="about__skills_react">
            <p>
              react js / node js / git - <small> 91% </small>
            </p>
            <span></span>
          </div>
          <div className="about__skills_ui">
            <p>
              ui / ux designing - <small> 70% </small>
            </p>
            <span></span>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  )
}
export default Resume
