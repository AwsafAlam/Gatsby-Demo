import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from './image'

const Header = ({ siteTitle }) => (
    <header class="header text-center">	    
	    <h1 class="blog-name pt-lg-4 mb-0"><a href="index.html">{siteTitle}</a></h1>
        
	    <nav class="navbar navbar-expand-lg navbar-dark" >
           
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
			</button>

			<div id="navigation" class="collapse navbar-collapse flex-column" >
				<div class="profile-section pt-3 pt-lg-0">
				    <Image class="profile-image mb-3 rounded-circle mx-auto" alt="image" />			
					
					<div class="bio mb-3">Hi, my name is Anthony Doe. Briefly introduce yourself here. You can also provide a link to the about page.<br/><a href="about.html">Find out more about me</a></div>
					<ul class="social-list list-inline py-3 mx-auto">
			            {/* <li class="list-inline-item"><a href="https://www."><i class="fab fa-twitter fa-fw"></i></a></li> */}
			            <li class="list-inline-item"><a href="https://www.linkedin.com/in/awsafalam"><i class="fab fa-linkedin-in fa-fw"></i></a></li>
			            <li class="list-inline-item"><a href="https://www.github.com/AwsafAlam"><i class="fab fa-github-alt fa-fw"></i></a></li>
			            {/* <li class="list-inline-item"><a href="https://www."><i class="fab fa-stack-overflow fa-fw"></i></a></li> */}
			            <li class="list-inline-item"><a href="https://www.facebook.com/awsafanindo"><i class="fab fa-codepen fa-fw"></i></a></li>
			        </ul>
			        <hr/> 
				</div>
				
				<ul class="navbar-nav flex-column text-left">
					<li class="nav-item active">
					    <a class="nav-link" href="index.html"><i class="fas fa-home fa-fw mr-2"></i>Home <span class="sr-only">(current)</span></a>
					</li>
					<li class="nav-item">
					    <Link class="nav-link" to="/blog"><i class="fas fa-bookmark fa-fw mr-2"></i>Blog</Link>
					</li>
					<li class="nav-item">
					    <Link class="nav-link" to="/about"><i class="fas fa-user fa-fw mr-2"></i>About Me</Link>
					</li>
				</ul>
				
				<div class="my-2 my-md-3">
				    <a class="btn btn-primary" href="https://facebook.com/awsaf.anindo" rel="noopener noreferrer" target="_blank">Get in Touch</a>
				</div>
			</div>
		</nav>
    </header>
    
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
