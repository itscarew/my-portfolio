import React, { useState, useEffect } from "react"
import Layout from "../components/Layout"
import Head from "../components/Head"

const Index = () => {
  const [state, setState] = useState(true)
  useEffect(() => {
    const interval = setInterval(() => {
      setState(!state)
    }, 5000)
    return () => clearInterval(interval)
  }, [state])

  return (
    <Layout>
      <Head title="Home" />
      <div className="intro">
        <h1 className="intro__text">
          <span className="intro__text_small">
            {state ? " hello! I'm" : "I'm from Lagos, Nigeria"}
          </span>
          <span className="intro__text_big">
            {state ? "Olaonipekun Carew " : "a web developer"}
          </span>
        </h1>
      </div>
    </Layout>
  )
}

export default Index
