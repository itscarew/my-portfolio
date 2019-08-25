import React from "react"
import Layout from "../components/Layout"
import Head from "../components/Head"

const Resume = () => (
  <Layout>
    <Head title="About" />
    <div className="about">
      <div className="about__profile">
        <h1>Profile</h1>
        <h2>
          I'm Olaonipekun Carew. I'm a Front end Developer from Lagos, Nigeria
        </h2>
        <p>
          Innovative front end developer with 2 years experience in building
          pixel perfect Websites , Web apps and UIs. I aim to make a difference
          through my creative solution.
        </p>
        <p>
          Procient In HTML , CSS , JavaScript and modern frameworks like React.
          A very passionate developer with good skills and understanding.
        </p>
      </div>
      <div className="about__experience">
        <h1>Experience/Work</h1>
        <p>
          I'm currently a freelance developer who has been developing responsive
          and functional websites and web apps to meet my users needs.
        </p>
      </div>
      <div className="about__education">
        <h1>Education</h1>
        <ul>
          <li>
            I am currently in NIIT studying which I'm going to have{" "}
            <b>Honours Diploma</b> in Software Engineering (Master Mind Series).
          </li>
          <li>
            I have a <b> National Diploma </b> in Computer Science from Yaba
            College Of Technology.
          </li>
        </ul>
      </div>
      <div className="about__skills">
        <h1>Skills</h1>
        <div className="about__skills_html">
          <p>html</p>
          <span></span>
        </div>
        <div className="about__skills_css">
          <p>css / sass / tailwind / bootstrap</p>
          <span></span>
        </div>
        <div className="about__skills_javascript">
          <p> javascript </p>
          <span></span>
        </div>
        <div className="about__skills_react">
          <p>react / redux / git </p>
          <span></span>
        </div>
        <div className="about__skills_ui">
          <p>ui / ux designing</p>
          <span></span>
        </div>
      </div>
    </div>
  </Layout>
)

export default Resume
