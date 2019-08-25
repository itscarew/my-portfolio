import React from "react"
import { Helmet } from "react-helmet"

const Head = props => (
  <Helmet>
    <title> Olaonipekun Carew | {props.title} </title>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <script src="https://kit.fontawesome.com/3c3d32c537.js"></script>
  </Helmet>
)

export default Head
