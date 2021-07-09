import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from './image'

const Header = ({ siteTitle }) => (
    <header className="header text-center">	    
	      
	    <nav className="navbar navbar-expand-lg navbar-dark" >
           
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
			<span className="navbar-toggler-icon"></span>
			</button>

			<div id="navigation" className="collapse navbar-collapse flex-column" >
				<div style={{marginTop: 64}} className="profile-section pt-3 pt-lg-0">
					<div style={{ marginBottom: 35, marginLeft: 35}} ><Image /></div>
					
					<div className="bio mb-3">Hi, my name is Awsaf Alam. I am a passionate developer waiting for the opportunity to learn new things. Development of any kind is a creative process, and I am happy to be a part of it. I love to work on all platforms, Android and Web developments, but currently I am focusing my efforts in Nodejs and MERN stack..
						<br/>
						<br/>
						<Link to='/about'>Find out more about me</Link>
					</div>
					<ul className="social-list list-inline py-3 mx-auto">
			            {/* <li className="list-inline-item"><a href="https://www."><i className="fab fa-twitter fa-fw"></i></a></li> */}
			            <li className="list-inline-item"><a href="https://www.linkedin.com/in/awsafalam"><i aria-label="linkedin" className="fab fa-linkedin-in fa-fw"></i></a></li>
			            <li className="list-inline-item"><a href="https://www.github.com/AwsafAlam"><i aria-label="github" className="fab fa-github-alt fa-fw"></i></a></li>
			            {/* <li className="list-inline-item"><a href="https://www."><i className="fab fa-stack-overflow fa-fw"></i></a></li> */}
			            <li className="list-inline-item"><a href="https://www.facebook.com/awsafanindo"><i aria-label="facebook" className="fab fa-codepen fa-fw"></i></a></li>
			        </ul>
			        <hr/> 
				</div>
				
				<ul className="navbar-nav flex-column text-left">
					<li className="nav-item active">
					    <Link className="nav-link" to="/"><i className="fas fa-home fa-fw mr-2"></i>Home <span className="sr-only">(current)</span></Link>
					</li>
					<li className="nav-item">
					    <Link className="nav-link" to="/"><i className="fas fa-bookmark fa-fw mr-2"></i>Blog</Link>
					</li>
					<li className="nav-item">
					    <Link className="nav-link" to="/about"><i className="fas fa-user fa-fw mr-2"></i>About Me</Link>
					</li>
				</ul>
				
				<div className="my-2 my-md-3">
				    <a className="btn btn-primary" href="https://www.facebook.com/awsafanindo" rel="noopener noreferrer" target="_blank">Get in Touch</a>
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
