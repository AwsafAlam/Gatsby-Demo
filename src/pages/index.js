import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    
	    <section className="cta-section theme-bg-light py-5">
		    <div className="container text-center">
			    <h2 className="heading">Hi, I'm Awsaf</h2>
			    <div className="intro">Welcome to my blog. Subscribe and get my latest blog post in your inbox.</div>
			    <form className="signup-form form-inline justify-content-center pt-3">
              <div className="form-group">
                  <label className="sr-only" for="semail">Your email</label>
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
                <Image className="mr-3 Image-fluid post-thumb d-none d-md-flex" src="assets/images/blog/blog-post-thumb-1.jpg" alt="image"/>
                <div className="media-body">
                  <h3 className="title mb-1"><Link to={post.node.frontmatter.path}>{post.node.frontmatter.title}</Link></h3>
                  <div className="meta mb-1"><span className="date">Published {post.node.frontmatter.date}</span><span className="time">5 min read</span><span className="comment">
                    {/* <a href="#">8 comments</a> */}
                  </span></div>
                    <div className="intro">{post.node.frontmatter.description}</div>
                  <Link className="more-link" to={post.node.frontmatter.path}>Read more &rarr;</Link>
                </div>
              </div>
            </div>
			    
          ))
        }
			    
        <nav className="blog-nav nav nav-justified my-5">
				  {/* <a className="nav-link-prev nav-item nav-link d-none rounded-left" href="#">Previous<i className="arrow-prev fas fa-long-arrow-alt-left"></i></a>
				  <a className="nav-link-next nav-item nav-link rounded" href="blog-list.html">Next<i className="arrow-next fas fa-long-arrow-alt-right"></i></a> */}
				</nav>
				
		    </div>
	    </section>
	    
	    <footer className="footer text-center py-2 theme-bg-dark">
		   
      {/* <small className="copyright">Made with <i className="fas fa-heart" style="color: #fb866a;"></i> by <a href="https://awsafdev.netlify.com" target="_blank">Awsaf</a></small> */}
		   
	    </footer>
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
            date
            description
          }
        }
      }
    }
  }
`

export default IndexPage
