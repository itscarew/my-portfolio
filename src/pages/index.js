import React, { useState } from "react"
import Layout from "../components/Layout"
import { Switch } from "@headlessui/react"
import { GiNightSleep } from "react-icons/gi"
import { IoIosSunny } from "react-icons/io"

import "./index.scss"

const Index = () => {
  const [enabled, setEnabled] = useState(false)
  return (
    <Layout
      className={`${
        enabled ? "bg-black text-gray-100  " : ""
      } transition ease-in-out duration-200 `}
    >
      <div className="items">
        <div className="intro">
          <div className="w-full flex items-center justify-between">
            {" "}
            <span>
              {" "}
              Hi{" "}
              <span role={"img"} aria-label="hi">
                👋
              </span>{" "}
              !{" "}
            </span>
            <div className="flex items-center">
              <div className="mr-2">
                {" "}
                <IoIosSunny size="2rem" />{" "}
              </div>
              <Switch
                checked={enabled}
                onChange={setEnabled}
                className={`${
                  enabled ? "bg-green-600" : "bg-gray-200"
                } relative inline-flex items-center h-10 rounded-full w-20`}
              >
                <span className="sr-only">Enable notifications</span>
                <span
                  className={`${
                    enabled ? "translate-x-11" : "translate-x-1"
                  } inline-block w-7 h-7 transform bg-white rounded-full transition ease-in-out duration-200`}
                />
              </Switch>
              <div className="ml-2">
                <GiNightSleep size="2rem" />
              </div>
            </div>
          </div>
          <span>
            {" "}
            I am <b> Olaonipekun Carew </b> . Ola for simplicity 😊 , I write
            things that work on the internet.{" "}
          </span>
        </div>
        <p>
          I’m an innovative <b> fullstack developer </b> with 5 years experience
          in building pixel-perfect and customer-focused websites, UIs and
          server-side applications, deploying robust and secure APIs, meeting
          high standards web design, user experience, best practices, and speed.
          I aim to make a difference through my creative solution.
        </p>
        <p>
          I'm proficient in <b> HTML, CSS, JavaScript, Typescript </b> and
          modern frameworks like
          <b>
            {" "}
            React, Redux, SASS, Nodejs , Nextjs , Redis, Express, NestJS and
            more{" "}
          </b>{" "}
          .
        </p>
        <p>
          I reside in <b> Lagos, Nigeria </b>. I'm currently working as a
          frontend developer in{" "}
          <b> Radeus Business Tech Limited, Lagos, Nigeria. </b> I've worked as
          a frontend developer at <b> Payday, Canada and Rwanda </b> and{" "}
          <b> Zijela ICT, Lagos, Nigeria </b>.
        </p>

        <p>
          I schooled in <b> Yaba college of technology </b>. I also have an
          honours diploma from <b> NIIT. </b>
        </p>

        <p>
          Get in touch with me :{" "}
          <a href="mailto:itscarew@gmail.com">itscarew@gmail.com</a>.
        </p>

        <p>
          My{" "}
          <a
            href="https://github.com/itscarew?tab=repositories"
            target="/_blank"
          >
            github{" "}
          </a>{" "}
          repo . This is my{" "}
          <a
            href="https://www.linkedin.com/in/olaonipekun-carew/"
            target="/_blank"
          >
            linkedin
          </a>{" "}
          profile.
        </p>

        <p>
          Here is my{" "}
          <a download href="/resume.pdf">
            {" "}
            resume{" "}
          </a>
          .{" "}
        </p>

        <p>
          Outside of programming and work, I love watching movies, especially
          <b> sci-fi series </b>. I'm also a gamer and I play basketball 🏀. A
          big NBA fan here 😉.
        </p>

        <footer> &copy; {new Date().getFullYear()} Me </footer>
      </div>
    </Layout>
  )
}

export default Index
