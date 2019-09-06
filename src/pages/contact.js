import React from "react"
import Layout from "../components/Layout"
import Head from "../components/Head"
import Footer from "../components/Footer"

const Contact = () => (
  <Layout>
    <Head title="Contact Me" />
    <div className="container">
      <div className="contact">
        <h2 className="contact__title">Contact Me</h2>
        <div className="contact__info">
          <div className="contact__info_form">
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              action="/success"
            >
              <input type="hidden" name="form-name" value="contact" />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                autoFocus
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
              <input type="text" name="subject" placeholder="Subject" />
              <textarea
                placeholder="Tell me something "
                required
                name="message"
                defaultValue="I want to work with you"
              ></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
          <div className="contact__info_socialMedia">
            <ul>
              <a href="https://twitter.com/itscarew" target="/_blank">
                <li>
                  <i className="fab fa-twitter"></i>
                </li>
              </a>
              <a href="https://github.com/itscarew" target="/_blank">
                <li>
                  <i className="fab fa-github"></i>
                </li>
              </a>
              <a href="https://www.instagram.com/itscarew/" target="/_blank">
                <li>
                  <i className="fab fa-instagram"></i>
                </li>
              </a>
            </ul>
            <p className="contact__info_socialMedia_email">
              or Email me:{" "}
              <a href="mailto:itscarew@gmail.com" target="/_blank">
                itscarew@gmail.com{" "}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </Layout>
)

export default Contact
