import "../styles/globals.css"
import type { AppProps } from "next/app"
import React from "react"
import NavBar from "../components/NavBar"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <NavBar />
      <Component {...pageProps} />
    </React.Fragment>
  )
}

export default MyApp
