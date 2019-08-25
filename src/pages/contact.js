import React from "react"
import Layout from "../components/Layout"
import Head from "../components/Head"

const Contact = () => (
  <Layout>
    <Head title="Contact Me" />
    <div className="contact">
      <h2 className="contact__title">Contact me</h2>
      <div className="contact__info">
        <div className="contact__info_form">
          <form>
            <input type="text" placeholder="Your Name" autoFocus />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Tell me something ..."></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
        <div className="contact__info_socialMedia">
          <ul>
            <a href="/">
              <li>
                <i className="fab fa-twitter"></i>
              </li>
            </a>
            <a href="/">
              <li>
                <i className="fab fa-github"></i>
              </li>
            </a>
            <a href="/">
              <li>
                <i className="fab fa-behance"></i>
              </li>
            </a>
            <a href="/">
              <li>
                <i className="fab fa-instagram"></i>
              </li>
            </a>
          </ul>
          <p className="contact__info_socialMedia_email">
            or Email me: <a href="/">itscarew@gmail.com </a>
          </p>
        </div>
      </div>
    </div>
  </Layout>
)

export default Contact
