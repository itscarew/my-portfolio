import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

const Header = () => {
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
    <header className="header">
      <div className="header__name">
        <Link to="/">
          <h1>{data.site.siteMetadata.title}</h1>
        </Link>
      </div>
      <nav className="header__links">
        <ul>
          <li>
            <Link activeClassName="is-active" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link activeClassName="is-active" to="/resume">
              Resume
            </Link>
          </li>
          <li>
            <Link activeClassName="is-active" to="/portfolio">
              Portfolio
            </Link>
          </li>
          <li>
            <Link activeClassName="is-active" to="/contact">
              Contact Me
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
