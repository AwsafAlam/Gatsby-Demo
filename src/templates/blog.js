import React from 'react';
// import Helmet from 'react-helmet';
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Template({ data }) {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <h1>{post.frontmatter.title}</h1>
      <p>Welcome to page 2</p>
      <div dangerouslySetInnerHTML={{__html: post.html}} />
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  );
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path }  }){
      html
      frontmatter {
        path
        title
      }
    }
  }
`