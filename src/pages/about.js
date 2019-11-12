import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"
import "./about.scss"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
		<Link to='/download'>Download Resume here</Link>
		<div className="container px-3 px-lg-5">
			<article className="resume-wrapper mx-auto theme-bg-light p-5 mb-5 my-5 shadow-lg">
				
				<div className="resume-header">
					<div className="row align-items-center">
						<div className="resume-title col-12 col-md-6 col-lg-8 col-xl-9">
							<h2 className="resume-name mb-0 text-uppercase">Awsaf Alam</h2>
							<div className="resume-tagline mb-3 mb-md-0">Senior Software Engineer</div>
						</div>
						<div className="resume-contact col-12 col-md-6 col-lg-4 col-xl-3">
							<ul className="list-unstyled mb-0">
								<li className="mb-2"><i className="fas fa-phone-square fa-fw fa-lg mr-2 "></i><a className="resume-link" href="tel:#">0123 4567 890</a></li>
								<li className="mb-2"><i className="fas fa-envelope-square fa-fw fa-lg mr-2"></i><a className="resume-link" href="mailto:awsafalam@gmail.com">awsafalam@gmail.com</a></li>
								<li className="mb-2"><i className="fas fa-globe fa-fw fa-lg mr-2"></i><a className="resume-link" href="https://www.awsafdev.netlify.com">www.awsafdev.netlify.com</a></li>
								<li className="mb-0"><i className="fas fa-map-marker-alt fa-fw fa-lg mr-2"></i>Dhaka, Bangladesh</li>
							</ul>
						</div>
					</div>
					
				</div>
				<hr/>
				<div className="resume-intro py-3">
					<div className="media flex-column flex-md-row align-items-center">
						<div style={{marginRight: 30}}>
							<Image style={{margin: 0}} className="resume-profile-image mb-3 mb-md-0 mr-md-5 ml-md-0 rounded mx-auto" />
						</div>
						<div className="media-body text-left">
							<p className="mb-0">Hi, my name is Awsaf Alam. I am a passionate developer waiting for the opportunity to learn new things. Development of any kind is a creative process, and I am happy to be a part of it. I love to work on all platforms, Android and Web developments, but currently I am focusing my efforts in Nodejs and MERN stack..</p>
						</div>
					</div>
				</div>
				<hr/>
				<div className="resume-body">
					<div className="row">
						<div className="resume-main col-12 col-lg-8 col-xl-9 pr-0 pr-lg-5">
							<section className="work-section py-3">
								<h3 className="text-uppercase resume-section-heading mb-4">Work Experiences</h3>
								<div className="item mb-3">
									<div className="item-heading row align-items-center mb-2">
										<h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">Cheif Technology Officer</h4>
										<div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-left text-md-right">Online Sohopathi | Dec 2018 - Present</div>
										
									</div>
									<div className="item-content">
										<p>I have developed the front-end interface for https://onlinesohopathi.com/ this was developed from scratch using vanilla javascript, and Materialize library. </p>
										<ul className="resume-list">
											<li>Scalable architecture design</li>
											<li>Migrated the entire database to a NoSQL based design</li>
											<li>Improved performance and security issues</li>
										</ul>
									</div>
								</div>
								<div className="item">
									<div className="item-heading row align-items-center mb-2">
										<h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">Lead Frontend Developer</h4>
										<div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-left text-md-right">Online Sohopathi | 2017 - 2018</div>
										
									</div>
									<div className="item-content">
										<p>I have developed the front-end interface for https://onlinesohopathi.com/ this was developed from scratch using vanilla javascript, and Materialize library. </p>
									</div>
								</div>
								<div className="item mb-3">
									<div className="item-heading row align-items-center mb-2">
										<h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">Junior Software Developer</h4>
										<div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-left text-md-right">Headless Technologies | May 2019 - Oct 2019</div>
										
									</div>
									<div className="item-content">
										<p>Currently working on a Machine Learning driven chat platform https://engaze.ai/ this was developed using nodejs and React.Also worked on several oder client projects, and web applications.</p>
										<ul className="resume-list">
											<li>Developed a client website using ReactJS.</li>
											<li>Dialogflow and facebook webhook integration with Nodejs</li>
										</ul>
									</div>
								</div>
								<div className="item mb-3">
									<div className="item-heading row align-items-center mb-2">
										<h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">Senior Software Developer</h4>
										<div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-left text-md-right">Kolpobd | Jun 2018 - Feb 2019</div>
										
									</div>
									<div className="item-content">
										<p>Worked  on an order management and delivery system for the company.</p>
									</div>
								</div>
								<div className="item">
									<div className="item-heading row align-items-center mb-2">
										<h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">WebMaster</h4>
										<div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-left text-md-right">BUET Robotics Society | 2018 - Present</div>
										
									</div>
									<div className="item-content">
										<p>I was in charge of maintaining and updating the main website http://buetroboticssociety.com/ </p>
									</div>
								</div>
							</section>

							
							<section className="project-section py-3">
								<h3 className="text-uppercase resume-section-heading mb-4">Projects</h3>
								<div className="item mb-3">
									<div className="item-heading row align-items-center mb-2">
										<h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">Android Studio / Java</h4>
										<div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-left text-md-right">Open Source</div>
										
									</div>
									<div className="item-content">
										<p>I have worked on several android based projects, one of which was developing a health monitoring App for CSE Fest Hackathon 2019. Similarly I have developed other apps as well for other competitions etc, all of which are present in github.</p>
										
										
									</div>
								</div>
								<div className="item">
									<div className="item-heading row align-items-center mb-2">
										<h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">Language Learning Application</h4>
										<div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-left text-md-right">Open Source</div>
										
									</div>
									<div className="item-content">
										<p>I am currently working on a Language learning application, as part of my Software Engineering course project in Flutter.</p>
										
									</div>
								</div>
								<div className="item">
									<div className="item-heading row align-items-center mb-2">
										<h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">Automatic Code Repair</h4>
										<div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-left text-md-right">Open Source</div>
										
									</div>
									<div className="item-content">
										<p>A research project which aims in automatic code repair using Machine Learning. As part of the project I am making a web crawler in python using Scrapy which will crawl data from github. We will use to train our models. </p>
										
									</div>
								</div>
							</section>
						</div>
						<aside className="resume-aside col-12 col-lg-4 col-xl-3 px-lg-4 pb-lg-4">
							<section className="skills-section py-3">
								<h3 className="text-uppercase resume-section-heading mb-4">Skills</h3>
								<div className="item">
									<h4 className="item-title">Technical</h4>
									<ul className="list-unstyled resume-skills-list">
										<li className="mb-2">JavaScript/Angular/React/Vue</li>
										<li className="mb-2">Python/Ruby/PHP</li>
											<li className="mb-2">Node.js/ASP.NET</li>
											<li className="mb-2">PostgreSQL/MySQL</li>
											<li className="mb-2">Object-oriented design</li>
											<li className="mb-2">Design and implement database structures</li>
											<li>Lead and deliver complex software systems</li>
										</ul>
									</div>
									<div className="item">
										<h4 className="item-title">Professional</h4>
										<ul className="list-unstyled resume-skills-list">
											<li className="mb-2">Effective communication</li>
											<li className="mb-2">Team player</li>
												<li className="mb-2">Strong problem solver</li>
												<li>Good time management</li>
											</ul>
										</div>
									</section>
									<section className="education-section py-3">
										<h3 className="text-uppercase resume-section-heading mb-4">Education</h3>
										<ul className="list-unstyled resume-education-list">
											<li>
												<div className="resume-degree font-weight-bold">BSc Computer Science and Engineering</div>
												<div className="resume-degree-org text-muted">Bangladesh University of Engineering & Technology</div>
												<div className="resume-degree-time text-muted">2015 - Present</div>
												<div className="resume-degree-time text-muted">CGPA - 3.40</div>
											</li>
											<li className="mb-3">
												<div className="resume-degree font-weight-bold">4 A*   in  EDEXCEL A LEVELS</div>
												<div className="resume-degree-org text-muted">Maple Leaf International School</div>
												<div className="resume-degree-time text-muted">2013 - 2015</div>
											</li>
											<li className="mb-3">
												<div className="resume-degree font-weight-bold">6 A* & 1B  in  EDEXCEL  O LEVELS</div>
												<div className="resume-degree-org text-muted">Maple Leaf International School</div>
												<div className="resume-degree-time text-muted">2011 - 2013</div>
											</li>
										</ul>
									</section>
									<section className="education-section py-3">
										<h3 className="text-uppercase resume-section-heading mb-4">Awards</h3>
										<ul className="list-unstyled resume-awards-list">
											<li className="mb-3">
												<div className="font-weight-bold">Award Lorem Ipsum</div>
												<div className="text-muted">Microsoft lorem ipsum (2019)</div>
											</li>
											<li>
												<div className="font-weight-bold">Award Donec Sodales</div>
												<div className="text-muted">Oracle Aenean (2017)</div>
											</li>
										</ul>
									</section>
									<section className="skills-section py-3">
										<h3 className="text-uppercase resume-section-heading mb-4">Languages</h3>
										<ul className="list-unstyled resume-lang-list">
											<li className="mb-2">Bengali <span className="text-muted">(Native)</span></li>
											<li>English <span className="text-muted">(Professional)</span></li>
										</ul>
									</section>
									<section className="skills-section py-3">
										<h3 className="text-uppercase resume-section-heading mb-4">Interests</h3>
										<ul className="list-unstyled resume-interests-list mb-0">
											<li className="mb-2">Climbing</li>
											<li className="mb-2">Snowboarding</li>
											<li className="mb-2">Photography</li>
											<li>Travelling</li>
										</ul>
									</section>
									
								</aside>
							</div>
						</div>
						<hr/>
						<div className="resume-footer text-center">
							<ul className="resume-social-list list-inline mx-auto mb-0 d-inline-block text-muted">
								<li className="list-inline-item mb-lg-0 mr-3"><a className="resume-link" href="https://www.github.com/AwsafAlam"><i className="fab fa-github-square fa-2x mr-2" data-fa-transform="down-4"></i><span className="d-none d-lg-inline-block text-muted">github.com/AwsafAlam</span></a></li>
								<li className="list-inline-item mb-lg-0 mr-3"><a className="resume-link" href="https://www.linkedin.com/in/awsafalam"><i className="fab fa-linkedin fa-2x mr-2" data-fa-transform="down-4"></i><span className="d-none d-lg-inline-block text-muted">linkedin.com/in/awsafalam</span></a></li>
								{/* <li className="list-inline-item mb-lg-0 mr-lg-3"><a className="resume-link" href="#"><i className="fab fa-twitter-square fa-2x mr-2" data-fa-transform="down-4"></i><span className="d-none d-lg-inline-block text-muted">@twittername</span></a></li> */}
							</ul>
						</div>
					</article>
					
				</div>
	</Layout>
)

export default SecondPage
