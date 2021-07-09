import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Img from "gatsby-image"

const IndexPage = ({data}) => (
  <Layout>
    <Seo title="Home" />
      <section className="cta-section theme-bg-light py-5">
		    <div className="container text-center">
			    <h2 className="heading">Hi, I'm Awsaf</h2>
			    <div className="intro">Welcome to my blog. Subscribe and get my latest blog post in your inbox.</div>
			    <form className="signup-form form-inline justify-content-center pt-3">
              <div className="form-group">
                  <label htmlFor="semail" className="sr-only">Your email</label>
                  <input type="email" id="semail" name="semail1" className="form-control mr-md-1 semail" placeholder="Enter email"/>
              </div>
              <button type="submit" className="btn btn-primary">Subscribe</button>
          </form>
		    </div>
	    </section>
	    <section className="blog-list px-3 py-5 p-md-5">
		    <div className="container">
        {
          data.allMarkdownRemark.edges.map(post => (
            <div key={post.node.id} className="item mb-5">
              <div className="media">
              <Img style={{width: 120, height: 120, marginRight: 16}}  fluid={post.node.frontmatter.image.childImageSharp.fluid} />
                <div className="media-body">
                  <h3 className="title mb-1"><Link to={post.node.frontmatter.path}>{post.node.frontmatter.title}</Link></h3>
                  <div className="meta mb-1">
                    <span className="date">Published {post.node.frontmatter.date}</span>
                  </div>
                    <div className="intro">{post.node.frontmatter.description}</div>
                  <Link className="more-link" to={post.node.frontmatter.path}>Read more &rarr;</Link>
                </div>
              </div>
            </div>
			    
          ))
        }
			    
        {/* <nav className="blog-nav nav nav-justified my-5">
				  <a className="nav-link-prev nav-item nav-link d-none rounded-left" href="/">Previous<i className="arrow-prev fas fa-long-arrow-alt-left"></i></a>
				  <a className="nav-link-next nav-item nav-link rounded" href="blog-list.html">Next<i className="arrow-next fas fa-long-arrow-alt-right"></i></a>
				</nav> */}
				
      </div>
    </section>
    {/* <footer style={
        {
          position: 'absolute',
          bottom: 0,
          width: '100%'
        }
      } className="footer text-center py-2 theme-bg-dark">
      <small className="copyright">Made with &#10084; by <a href="https://awsafdev.netlify.com" target="_blank">Awsaf</a></small>
    </footer> */}
  </Layout>
)

export const pageQuery = graphql `
  query IndexQuery {
    allMarkdownRemark(limit: 10, sort: {fields: frontmatter___date, order: DESC}) {
      edges {
        node {
          id
          frontmatter {
            title
            description
            date
            path
            image {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
  
`

export default IndexPage
