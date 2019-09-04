import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Footer from "../components/Footer"

export const query = graphql`
  query($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
        url
      }
      html
    }
  }
`

const Portfolio = props => {
  return (
    <Layout>
      <div className="container">
        <div className=" portfolio portfolio__content">
          <h1>{props.data.markdownRemark.frontmatter.title}</h1>
          <div
            className="portfolio__content_eachdiv"
            dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
          ></div>
          <a href={props.data.markdownRemark.frontmatter.url} target="/_blank">
            {" "}
            View Website{" "}
          </a>
        </div>
      </div>
      <Footer />
    </Layout>
  )
}

export default Portfolio
