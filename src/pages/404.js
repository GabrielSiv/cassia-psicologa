import * as React from "react"

import Layout from "../components/Layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="Cassia Lacê Psicoterapia" />
  </Layout>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
