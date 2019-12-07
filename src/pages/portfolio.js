import React from "react"
import Layout from "../components/Layout"
import Head from "../components/Head"
import Footer from "../components/Footer"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { graphql, useStaticQuery } from "gatsby"

const Portfolio = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
            html
            excerpt
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Head title="Portfolio" />
      <div className="portfolio">
        <h1 className="portfolio__title">
          <span className="portfolio__title_small">portfolio</span>
          <span className="portfolio__title_big">
            Check out a few of my works
          </span>
          <a
            href="https://github.com/itscarew"
            target="/_blank"
            className="portfolio__title_extrasmall"
          >
            Check more of my projects on my github. This is just a few!
          </a>
        </h1>

        {data.allMarkdownRemark.edges.map((portfolio, index) => (
          <div key={index} className="portfolio__content">
            <div
              className="portfolio__content_alldiv"
              dangerouslySetInnerHTML={{ __html: portfolio.node.html }}
            ></div>
            <h1> {portfolio.node.frontmatter.title}</h1>
            <AniLink
              cover
              bg="#161616"
              to={`/portfolio/${portfolio.node.fields.slug}`}
            >
              More Info
            </AniLink>
          </div>
        ))}
      </div>
      <Footer />
    </Layout>
  )
}

export default Portfolio
