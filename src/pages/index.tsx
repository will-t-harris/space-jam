import React from "react"
import logo from "../images/gatsby-icon.png"
import { Link } from "gatsby"
import { createGlobalStyle } from "styled-components"
import '../index.css'

import Layout from "../components/layout"
import SEO from "../components/seo"

const GlobalStyle = createGlobalStyle`
	body {
		color: ${props => (props.theme === "home" ? "#CD9581" : "#31252A")};
		background-color: #31252A;
	}
`

const IndexPage = () => (
  <Layout>
	<GlobalStyle theme="home"/>
    <SEO title="Home" />
    <div className="container flex flex-col mx-auto px-4 text-center">
      <p className="font-sans">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        volutpat ipsum vel pellentesque consequat. Phasellus ut justo quis lacus
        porta tincidunt. In quis ante at risus porttitor hendrerit eu sed lorem.
        Suspendisse potenti. Aliquam at purus vel est scelerisque euismod. Nam
        in mi tellus. Etiam mi turpis, dignissim sit amet pretium quis, posuere
        a nisl. Aenean convallis nibh at posuere malesuada. Orci varius natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        Maecenas blandit dolor elit, ut laoreet mauris varius ut. Nunc a nisi
        sed justo faucibus dapibus. Donec rhoncus enim non elit facilisis
        euismod. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac
        egestas leo.{" "}
      </p>
    </div>
    <Link to="/about/">Go to page 2</Link>
    <Link to="/contact/">Go to contact page</Link>
  </Layout>
)

export default IndexPage
