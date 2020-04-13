import React from "react"
import Layout from "../components/Layout"

import "./index.scss"

const Index = () => {
  return (
    <Layout>
      <div className="items">
        <div className="intro">
          <span>Hi!</span>
          <span>
            {" "}
            I am <b> Olaonipekun Carew </b> . Ola for simplicity 😊 , I write
            things that work on the internet.{" "}
          </span>
        </div>
        <p>
          I consider myself to be an innovative <b> Front End Developer </b> who
          loves building pixel-perfect Websites, Web apps, and UIs. I aim to
          make a the difference through my creative solution.
        </p>
        <p>
          I'm proficient in <b> HTML, CSS, JavaScript, Ruby </b> and modern
          frameworks like
          <b> React, SASS, Nodejs </b> .
        </p>
        <p>
          I reside in <b> Lagos, Nigeria </b>. I'm currently a Freelance
          Developer who has been developing responsive and functional websites
          and web apps to meet my clients' needs.
        </p>

        <p>
          Get in touch with me :{" "}
          <a href="mailto:itscarew@gmail.com">itscarew@gmail.com</a>.
        </p>

        <p>
          Some of my works are on my{" "}
          <a
            href="https://github.com/itscarew?tab=repositories"
            target="/_blank"
          >
            github{" "}
          </a>{" "}
          repositories . This is my{" "}
          <a
            href="https://www.linkedin.com/in/olaonipekun-carew/"
            target="/_blank"
          >
            linkedin
          </a>{" "}
          profile. Also check my{" "}
          <a href="https://twitter.com/itscarew" target="/_blank">
            tweets
          </a>{" "}
          😉!
        </p>

        <p>
          Here is my{" "}
          <a download href="/resume.pdf">
            {" "}
            resume{" "}
          </a>
          .{" "}
        </p>

        <p>
          Outside of programming and work, I love watching movies, especially
          <b> sci-fi series </b>. I'm also a gamer and I play basketball 🏀. A
          big NBA fan here 😂.
        </p>

        <footer> &copy; {new Date().getFullYear()} Me </footer>
      </div>
    </Layout>
  )
}

export default Index
