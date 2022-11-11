import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/seo"
import Intro from "../components/components/Intro"
import AboutMe from "../components/components/AboutMe"
import ServicesOffer from "../components/components/ServicesOffer"
import Contact from "../components/components/Contact"


const IndexPage = () => {
  return(
  <Layout>
    <Seo title="Cassia Lacê Psicoterapia" />
    <Intro></Intro>
    <AboutMe></AboutMe>
    <ServicesOffer></ServicesOffer>
    <Contact></Contact>
  </Layout>
)
}

export default IndexPage
