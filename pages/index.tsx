import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import React from "react"
import About from "../components/About"
import Contact from "../components/Contact"
import Main from "../components/Main"
import Projects from "../components/Projects"
import Skills from "../components/Skills"

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Tokuda | Front-End Developer</title>
        <link rel="icon" href="/fav.png" />
      </Head>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </React.Fragment>
  )
}

export default Home
