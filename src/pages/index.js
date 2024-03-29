import React from "react"
import { Link } from "gatsby"
import { useNetlifyIdentity } from "react-netlify-identity-widget"
import Identity from "../components/identity"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  const identity = useNetlifyIdentity("https://kflavin-netlify-identity-functions.netlify.com")
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Identity />
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage
