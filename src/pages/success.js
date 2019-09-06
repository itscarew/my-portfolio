import React from "react"
import { Link } from "gatsby"
import Head from "../components/Head"
import Footer from "../components/Footer"
import Layout from "../components/Layout"

const Success = () => (
  <Layout>
    <Head title="success" />
    <div className="container">
      <div className="pnf">
        <h1 className="pnf__content">
          <span className="pnf__content_thank"> Thank You !! </span>
          <span className="pnf__content_message"> Message Recieved </span>
          <span className="pnf__content_message">
            Will get back to you as soon as possible
          </span>
        </h1>
        <Link to="/contact">Go back </Link>
      </div>
    </div>
    <Footer />
  </Layout>
)

export default Success
