import React from "react"
import { Link } from "gatsby"
import Head from "../components/Head"

const PageNotFound = () => (
  <div>
    <Head title="404" />
    <Link to="/"> Page Not FOund </Link>
  </div>
)

export default PageNotFound
