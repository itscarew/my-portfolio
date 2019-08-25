import React from "react"
import { Link } from "gatsby"

const Header = () => (
  <header className="header">
    <div className="header__name">
      <Link to="/">
        <h1>Olaonipekun Carew</h1>
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
          <Link activeClassName="is-active" to="/services">
            Services
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

export default Header
