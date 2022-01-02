import React from "react"
import Header from "./Head"

import "./layout.scss"

const Layout = ({ children, className }) => (
  <div className={`layout ${className} `}>
    <Header />
    <div className="layout-children">{children}</div>
  </div>
)

export default Layout
