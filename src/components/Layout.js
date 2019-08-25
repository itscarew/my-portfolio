import React from "react"
import Header from "./Header"
import "../styles/index.scss"

const Layout = props => (
  <div className="layout">
    <Header />
    <div className="layout__children">{props.children}</div>
  </div>
)

export default Layout
