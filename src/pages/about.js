import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

function About() {
  return (
    <Layout>
      <SEO title="About" />
      <h1>About page</h1>
      <Link to="/">Back</Link>
    </Layout>
  )
}

export default About
