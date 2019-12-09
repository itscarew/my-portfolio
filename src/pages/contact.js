import React, { Component } from "react"
import Layout from "../components/Layout"
import Head from "../components/Head"
import Footer from "../components/Footer"

class Contact extends Component {
  constructor(props) {
    super(props)
    this.submitForm = this.submitForm.bind(this)
    this.state = {
      status: "",
      loading: false,
    }
  }

  submitForm(ev) {
    ev.preventDefault()
    this.setState({ loading: true })
    const form = ev.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader("Accept", "application/json")
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        form.reset()
        this.setState({ status: "SUCCESS", loading: false })
      } else {
        this.setState({ status: "ERROR", loading: false })
      }
    }
    xhr.send(data)
  }

  render() {
    const { status, loading } = this.state
    return (
      <Layout>
        <Head title="Contact Me" />
        <div className="container">
          <div className="contact">
            <h2 className="contact__title">Contact Me</h2>
            <div className="contact__info">
              <div className="contact__info_form">
                <form
                  onSubmit={this.submitForm}
                  name="contact"
                  method="POST"
                  action="https://formspree.io/mpzwbznz"
                >
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
                  {status === "SUCCESS" && (
                    <p
                      style={{
                        paddingBottom: "2rem",
                      }}
                    >
                      Message Recieved, I will get back as soon as possible.
                    </p>
                  )}
                  {status === "ERROR" && (
                    <p
                      style={{
                        paddingBottom: "2rem",
                      }}
                    >
                      Ooops! There was an error.
                    </p>
                  )}

                  {loading ? (
                    <button>Sending ...</button>
                  ) : (
                    <button type="submit">Send Message</button>
                  )}
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
                  <a
                    href="https://www.instagram.com/itscarew/"
                    target="/_blank"
                  >
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
  }
}

export default Contact
