import React, { Component } from "react"
import Layout from "../components/Layout"
import Head from "../components/Head"

class Index extends Component {
  state = { new: true }
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ new: !this.state.new })
    }, 5000)
  }
  render() {
    return (
      <Layout>
        <Head title="Home" />
        <div className="intro">
          <h1 className="intro__text">
            <span className="intro__text_small">
              {this.state.new ? " hello! I'm" : "I'm from Lagos, Nigeria"}
            </span>
            <span className="intro__text_big">
              {this.state.new ? "Carew Olaonipekun" : "a web developer"}
            </span>
          </h1>
        </div>
      </Layout>
    )
  }
}

export default Index
