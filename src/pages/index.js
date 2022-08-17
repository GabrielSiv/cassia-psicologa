import * as React from "react"
import { useStaticQuery, graphql} from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => {
  const teste1 = useStaticQuery(graphql`
  query teste{
   prismicHead{
		data{
			head_bg{
				url
      }
    }
   }
  }
`)

const alou = teste1.prismicHead.data.head_bg.url
console.log(alou)


  return(
  <Layout>
    <Seo title="Home" />
    <div>oi es</div>
  </Layout>
)
}

export default IndexPage
