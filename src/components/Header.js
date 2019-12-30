import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Logo from "../assets/IMG_20191023_230251_609.jpg"

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
          <img src = {Logo} alt = "logo" />
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
