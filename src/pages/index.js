import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    {
      data.allMarkdownRemark.edges.map(post => (
        <a key={post.node.id} href={post.node.frontmatter.path}>{post.node.frontmatter.title}</a>
      ))
    }
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export const pageQuery = graphql `
  query IndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`

export default IndexPage
