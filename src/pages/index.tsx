import React from "react"
import { Link } from "gatsby"
import { createGlobalStyle } from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const GlobalStyle = createGlobalStyle`
	body {
		color: ${props => (props.theme === "purple" ? "purple" : "white")};
	}
`

const IndexPage = () => (
  <Layout>
	  <GlobalStyle theme="purple" />
    <SEO title="Home" />
    <p>Test</p>
    <Link to="/about/">Go to page 2</Link>
    <Link to="/contact/">Go to contact page</Link>
  </Layout>
)

export default IndexPage
