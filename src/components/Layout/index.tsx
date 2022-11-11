import * as React from "react"
import PropTypes from "prop-types"
import GlobalStyles from "../../styles/global"
import Seo from "../seo"
import Header from "../Header"
import Footer from "../Footer"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <main>
        <Header></Header>
        {children}
        <Footer></Footer>
      </main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
