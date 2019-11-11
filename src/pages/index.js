import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    
	    <section class="cta-section theme-bg-light py-5">
		    <div class="container text-center">
			    <h2 class="heading">Hi, I'm Awsaf</h2>
			    <div class="intro">Welcome to my blog. Subscribe and get my latest blog post in your inbox.</div>
			    <form class="signup-form form-inline justify-content-center pt-3">
              <div class="form-group">
                  <label class="sr-only" for="semail">Your email</label>
                  <input type="email" id="semail" name="semail1" class="form-control mr-md-1 semail" placeholder="Enter email"/>
              </div>
              <button type="submit" class="btn btn-primary">Subscribe</button>
          </form>
		    </div>
	    </section>
	    <section class="blog-list px-3 py-5 p-md-5">
		    <div class="container">
        {
          data.allMarkdownRemark.edges.map(post => (
            <div key={post.node.id} class="item mb-5">
              <div class="media">
                <Image class="mr-3 Image-fluid post-thumb d-none d-md-flex" src="assets/images/blog/blog-post-thumb-1.jpg" alt="image"/>
                <div class="media-body">
                  <h3 class="title mb-1"><Link to={post.node.frontmatter.path}>{post.node.frontmatter.title}</Link></h3>
                  <div class="meta mb-1"><span class="date">Published {post.node.frontmatter.date}</span><span class="time">5 min read</span><span class="comment">
                    {/* <a href="#">8 comments</a> */}
                  </span></div>
                    <div class="intro">{post.node.frontmatter.description}</div>
                  <Link class="more-link" to={post.node.frontmatter.path}>Read more &rarr;</Link>
                </div>
              </div>
            </div>
			    
          ))
        }
			    
        <nav class="blog-nav nav nav-justified my-5">
				  {/* <a class="nav-link-prev nav-item nav-link d-none rounded-left" href="#">Previous<i class="arrow-prev fas fa-long-arrow-alt-left"></i></a>
				  <a class="nav-link-next nav-item nav-link rounded" href="blog-list.html">Next<i class="arrow-next fas fa-long-arrow-alt-right"></i></a> */}
				</nav>
				
		    </div>
	    </section>
	    
	    <footer class="footer text-center py-2 theme-bg-dark">
		   
      {/* <small class="copyright">Made with <i class="fas fa-heart" style="color: #fb866a;"></i> by <a href="https://awsafdev.netlify.com" target="_blank">Awsaf</a></small> */}
		   
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
