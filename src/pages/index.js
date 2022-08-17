import * as React from "react"

import Layout from "../components/Layout"
import Seo from "../components/seo"
import Header from "../components/Header"
import Intro from "../components/Intro"

const IndexPage = () => {
  return(
  <Layout>
    <Seo title="Home" />
    <Header></Header>
    <Intro></Intro>
  </Layout>
)
}

export default IndexPage
