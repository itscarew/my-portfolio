import React from "react"
import Layout from "../components/Layout"
import Head from "../components/Head"
import Footer from "../components/Footer"
import { graphql, useStaticQuery, Link } from "gatsby"

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
            Check out few of my works
          </span>
        </h1>

        {data.allMarkdownRemark.edges.map(portfolio => (
          <div className="portfolio__content">
            <div
              className="portfolio__content_alldiv"
              dangerouslySetInnerHTML={{ __html: portfolio.node.html }}
            ></div>
            <h1> {portfolio.node.frontmatter.title}</h1>
            <Link to={`/portfolio/${portfolio.node.fields.slug}`}>
              More Info
            </Link>
          </div>
        ))}
      </div>
      <Footer />
    </Layout>
  )
}

export default Portfolio
