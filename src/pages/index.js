import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ pageData }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Examples of Data Fetchiing</h1>
    <h2>Build Time</h2>
    <p>
      This data from GitHub is fetched in the `gatsby-node` file at build time
      and passed into the context{" "}
    </p>
    <h2>Runtime</h2>
    <p>Now go build something great.</p>
  </Layout>
)

export default IndexPage
