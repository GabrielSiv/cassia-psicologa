import * as React from "react"

import Layout from "../components/Layout"
import Seo from "../components/seo"
import Header from "../components/Header"
import Intro from "../components/Intro"
import AboutMe from "../components/AboutMe"
import ServicesOffer from "../components/ServicesOffer"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

const IndexPage = () => {
  return(
  <Layout>
    <Seo title="a" />
    <Header></Header>
    <Intro></Intro>
    <AboutMe></AboutMe>
    <ServicesOffer></ServicesOffer>
    <Contact></Contact>
    <Footer></Footer>

  </Layout>
)
}

export default IndexPage
