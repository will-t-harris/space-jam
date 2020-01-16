import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
	<p>Test</p>
    <Link to="/about/">Go to page 2</Link>
    <Link to="/contact/">Go to contact page</Link>
  </Layout>
)

export default IndexPage
