import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const Footer = () => {
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
    <div className="footer">
      <p className=" footer__info ">
        &copy; {new Date().getFullYear()} All rights reserved |{" "}
        {data.site.siteMetadata.author}
      </p>
    </div>
  )
}

export default Footer
