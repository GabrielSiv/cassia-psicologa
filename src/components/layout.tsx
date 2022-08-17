import * as React from "react"
import PropTypes from "prop-types"
import GlobalStyles from "../styles/global"

const Layout = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      <GlobalStyles></GlobalStyles>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
