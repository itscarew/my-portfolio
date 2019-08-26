import React from "react"

const Footer = () => (
  <div className="footer">
    <p className=" footer__info ">
      This site was created by{" "}
      <b>
        Me <i className="fas fa-smile-wink"></i>
      </b>{" "}
      | &copy; {new Date().getFullYear()} All rights reserved
    </p>
  </div>
)

export default Footer
