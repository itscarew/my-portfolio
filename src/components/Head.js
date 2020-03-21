import React from "react"
import { Helmet } from "react-helmet"

const Head = () => {
  return (
    <Helmet>
      <title>Olaonipekun Carew</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        href="https://fonts.googleapis.com/css?family=Raleway:400,700,900&display=swap"
        rel="stylesheet"
      />

      <script
        src="https://kit.fontawesome.com/3c3d32c537.js"
        crossorigin="anonymous"
      ></script>
    </Helmet>
  )
}

export default Head
