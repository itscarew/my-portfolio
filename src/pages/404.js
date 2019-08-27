import React from "react"
import { Link } from "gatsby"
import Head from "../components/Head"
import Footer from "../components/Footer"
import Layout from "../components/Layout"

const PageNotFound = () => (
  <Layout>
    <Head title="404" />
    <div className="container">
      <div className="pnf">
        <h1 className="pnf__content">
          <span className="pnf__content_ooops"> Ooops </span>
          <span className="pnf__content_message">
            I dont have a page like this !
          </span>
        </h1>
        <Link to="/">Go back to home </Link>
      </div>
    </div>
    <Footer />
  </Layout>
)

export default PageNotFound
