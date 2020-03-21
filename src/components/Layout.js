import React from "react"
import Header from "./Head"

import "./layout.scss"

const Layout = ({ children }) => (
  <div className="layout">
    <Header />
    <div className="layout-children">{children}</div>
  </div>
)

export default Layout
