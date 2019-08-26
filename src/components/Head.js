import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

const Head = props => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <Helmet>
      <title>
        {" "}
        {data.site.siteMetadata.title} | {props.title}{" "}
      </title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <script src="https://kit.fontawesome.com/3c3d32c537.js"></script>
      <link
        href="https://fonts.googleapis.com/css?family=Poppins:200,400&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  )
}

export default Head
