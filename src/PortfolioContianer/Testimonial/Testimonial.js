import React from 'react'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ScreenHeading from '../../Utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../Utilities/ScrollService';
import Animations from '../../Utilities/Animation';
import "./Testimonial.css";
/* import lady from "../../../src/img/Testimonial/lady.png";
import mike from "../../../src/img/Testimonial/mike.png";
import man from "../../../src/img/Testimonial/man.png"; */
import shape from "../../../src/img/Testimonial/shape-bg.png";
import mufeez from '../../../src/img/Testimonial/mufeez.jpg'
import zain from '../../../src/img/Testimonial/zain.jpeg'
import person from '../../../src/img/Testimonial/person.jpg'

export default function Testimonial(props) {
	let fadeInScreenHandler = (screen) => {
		if (screen.fadeInScreen !== props.id) return;
		Animations.animations.fadeInScreen(props.id);
	};
	// eslint-disable-next-line
	const fadeInSubscription =
		ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
	const options = {
		loop: true,
		autoplay: true,
		smartSpeed: 1600,
		responsive: {
			0: {
				items: 1,
			},
			768: {
				items: 1,
			},
			1000: {
				items: 2,
			},
		},
	};
	return (
		<div>
			<ScreenHeading title={'Recommendations'} subHeading={'What People Say About Me'} />
			<section className='testimonial-section fade-in' id={props.id || ''}>
				<div className="container">
					<div className="row">
						<OwlCarousel
							className="owl-carousel"
							id="testimonial-carousel"
							{...options}
						>
							<div className="col-lg-12">
								<div className="testi-item">
									<div className="testi-comment">
										<p>
											<i className="fa fa-quote-left" />
											<a href="http://www.retailcenter.io">www.retailcenter.io</a> and <a href="http://app.retailcenter.io">Finecart</a>  is built with Major Contribution from Haseeb ,its truly challenging to build a Saas Platform without a Large Team without a Large Team though he was accompanied by Copilot.
											<i className="fa fa-quote-right" />
										</p>
										<ul className="stars list-unstyled">
											<li>
												<i className="fa fa-star" />
											</li>
											<li>
												<i className="fa fa-star" />
											</li>
											<li>
												<i className="fa fa-star" />
											</li>
											<li>
												<i className="fa fa-star" />
											</li>
											<li>
												<i className="fas fa-star-half-alt"></i>
											</li>
										</ul>
									</div>
									<div className="client-info">
										<img src={mufeez} alt="no internet connection"></img>
										<h5>Mufeez Ahmed</h5>
										<p>CEO Mufeed Products & Services Pvt Ltd</p>
									</div>
								</div>
							</div>
							<div className="col-lg-12">
								<div className="testi-item">
									<div className="testi-comment">
										<p>
											<i className="fa fa-quote-left" />
											An exceptional front-end developer with expertise in software engineering and a talent for writing clean and efficient code, coupled with a willingness to go the extra mile, is highly recommended for any React Js project.
											<i className="fa fa-quote-right" />
										</p>
										<ul className="stars list-unstyled">
											<li>
												<i className="fa fa-star" />
											</li>
											<li>
												<i className="fa fa-star" />
											</li>
											<li>
												<i className="fa fa-star" />
											</li>
											<li>
												<i className="fa fa-star" />
											</li>
											<li>
												<i className="fa fa-star-half-alt" />
											</li>
										</ul>
									</div>
									<div className="client-info">
										<img src={zain} alt="no internet connection"></img>
										<h5>Md Zainul Abedin  </h5>
										<p>Senior Backup Administrator at Microland</p>
									</div>
								</div>
							</div>
							<div className="col-lg-12">
								<div className="testi-item">
									<div className="testi-comment">
										<p>
											<i className="fa fa-quote-left" />
											expedita provident architecto, mollitia culpa obcaecati animi ut! Corporis dolores obcaecati nemo, quibusdam recusandae voluptates eum iusto consequuntur illo porro voluptatum vero.consequuntur illo porro voluptatum vero voluptatum vero.
											<i className="fa fa-quote-right" />
										</p>
										{/* <ul className="stars list-unstyled">
											<li>
												<i className="fa fa-star" />
											</li>
											<li>
												<i className="fa fa-star" />
											</li>
											<li>
												<i className="fa fa-star" />
											</li>
											<li>
												<i className="fa fa-star" />
											</li>
											<li>
												<i className="fa fa-star-half-alt" />
											</li>
										</ul> */}
									</div>
									<div className="client-info">
										<img src={person} alt="no internet connection"></img>
										<h5>person</h5>
										<p>position</p>
									</div>
								</div>
							</div>
							{/* 	<div className="col-lg-12">
								<div className="testi-item">
									<div className="testi-comment">
										<p>
											<i className="fa fa-quote-left" />
											This guy is incredibly awesome, I hired him and when He
											delivered, I honestly fell in love with the project. He is
											indeed a great guy,
											<i className="fa fa-quote-right" />
										</p>
										<ul className="stars list-unstyled">
											<li>
												<i className="fa fa-star" />
											</li>
											<li>
												<i className="fa fa-star" />
											</li>
											<li>
												<i className="fa fa-star" />
											</li>
											<li>
												<i className="fa fa-star-half-alt" />
											</li>
											<li>
												<i className="fa fa-star" />
											</li>
										</ul>
									</div>
									<div className="client-info">
										<img src={man} alt="no internet connection"></img>
										<h5>John Smith</h5>
										<p>Bnaker</p>
									</div>
								</div>
							</div>
							<div className="col-lg-12">
								<div className="testi-item">
									<div className="testi-comment">
										<p>
											<i className="fa fa-quote-left" />
											When he delivered my job, my head spinned, it was so nice
											and he implemented every functionality i requested for.
											Thank you.
											<i className="fa fa-quote-right" />
										</p>
										<ul className="stars list-unstyled">
											<li>
												<i className="fa fa-star" />
											</li>
											<li>
												<i className="fa fa-star" />
											</li>
											<li>
												<i className="fa fa-star" />
											</li>
											<li>
												<i className="fa fa-star-half-alt" />
											</li>
											<li>
												<i className="fa fa-star" />
											</li>
										</ul>
									</div>
									<div className="client-info">
										<img src={lady} alt="no internet connection"></img>
										<h5>Daisy Dominic</h5>
										<p>CEO InansGlobal</p>
									</div>
								</div>
							</div>
							<div className="col-lg-12">
								<div className="testi-item">
									<div className="testi-comment">
										<p>
											<i className="fa fa-quote-left" />
											This guy is incredibly awesome, I hired him and when He
											delivered, I honestly fell in love with the project. He is
											indeed a great guy,
											<i className="fa fa-quote-right" />
										</p>
										<ul className="stars list-unstyled">
											<li>
												<i className="fa fa-star" />
											</li>
											<li>
												<i className="fa fa-star" />
											</li>
											<li>
												<i className="fa fa-star" />
											</li>
											<li>
												<i className="fa fa-star-half-alt" />
											</li>
											<li>
												<i className="fa fa-star" />
											</li>
										</ul>
									</div>
									<div className="client-info">
										<img src={man} alt="no internet connection"></img>
										<h5>John Smith</h5>
										<p>Bnaker</p>
									</div>
								</div>
							</div> */}
						</OwlCarousel>
					</div>
				</div>
			</section>
			<div className="footer-image">
				<img src={shape} alt="not responding" />
			</div>
		</div>
	)
}
