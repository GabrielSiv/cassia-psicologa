import * as React from "react"

import Layout from "../components/Layout"
import Seo from "../components/seo"
import Header from "../components/Header"
import Intro from "../components/Intro"
import AboutMe from "../components/AboutMe"

const IndexPage = () => {
  return(
  <Layout>
    <Seo title="Home" />
    <Header></Header>
    <Intro></Intro>
    <AboutMe></AboutMe>
  </Layout>
)
}

export default IndexPage
