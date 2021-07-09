import React from 'react';
// import Helmet from 'react-helmet';
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { DiscussionEmbed } from 'disqus-react' 

export default function Template({ data }) {
  const { markdownRemark: post } = data;
	const disqusConfig = {
		shortname: "awsa-1",
		config: { identifier: post.frontmatter.path, title: post.frontmatter.title },
	}

  return (
    <Layout>
      <Seo title={post.frontmatter.title} />
      
      <article className="blog-post px-3 py-5 p-md-5">
		    <div className="container">
			    <header className="blog-post-header">
				    <h2 className="title mb-2">{post.frontmatter.title}</h2>
				    <div className="meta mb-3"><span className="date">Published on {post.frontmatter.date}</span></div>
			    </header>
			    
			    <div className="blog-post-body">
				    <figure className="blog-banner">
								<Img className="img-fluid"  fluid={post.frontmatter.image.childImageSharp.fluid} />
								<figcaption className="mt-2 text-center image-caption">{post.frontmatter.title}</figcaption>
				    </figure>
		
					</div>
				   
			   
          <div dangerouslySetInnerHTML={{__html: post.html}} />
				    
			    {/* <nav className="blog-nav nav nav-justified my-5">
				  <a className="nav-link-prev nav-item nav-link rounded-left" href="index.html">Previous<i className="arrow-prev fas fa-long-arrow-alt-left"></i></a>
				  <a className="nav-link-next nav-item nav-link rounded-right" href="blog-list.html">Next<i className="arrow-next fas fa-long-arrow-alt-right"></i></a>
				</nav> */}
				
				<div className="blog-comments-section">
					<div id="disqus_thread"></div>
					<DiscussionEmbed {...disqusConfig} /> 
				</div>
				
		    </div>
	    </article>
	    

      <section className="promo-section theme-bg-light py-5 text-center">
		    <div className="container">
			    <h2 className="title">Promo Section Heading</h2>
			    <p>You can use this section to promote your side projects etc. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. </p>
                <figure className="promo-figure">
			        
			    </figure>
		    </div>
	    </section>
	    
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
        date
				description
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
`