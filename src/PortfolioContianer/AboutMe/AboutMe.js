import React from 'react'
import ScreenHeading from '../../Utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../Utilities/ScrollService'
import Animations from '../../Utilities/Animation'
import './AboutMe.css'

export default function AboutMe(props) {

	let fadeInScreenHandler = (screen) => {
		if (screen.fadeInScreen !== props.id) return;
		Animations.animations.fadeInScreen(props.id);
	};
	// eslint-disable-next-line
	const fadeInSubscription =
		ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);


	const SCREEN_CONSTSANTS = {
		description:
			"👋Hi there! I'm an experienced MERN stack developer specializing in ReactJS front-end development! 💻I've worked on a SaaS platform🌐using ReactJS, Redux, React-Bootstrap, and React-Router-dom.👨‍💻I'm proficient in integrating third-party APIs and building responsive user interfaces that look great on all devices 📱 💻. I'm committed to creating scalable and efficient applications that deliver exceptional user experience🚀. Let's build something amazing together!💪",
		highlights: {
			bullets: [
				"React Js web development ",
				"Interactive Front End as per the design",
				"Authentication and authorization",
				"Knowledge of other web technologies",
				"Redux for State Management",
				"Building REST API",
				"Managing database",
			],
			heading: "Here are a Few Highlights:",
		},
	};
	const renderHighlight = () => {
		return SCREEN_CONSTSANTS.highlights.bullets.map((value, i) => (
			<div className="highlight" key={i}>
				<div className="highlight-blob"></div>
				<span>{value}</span>
			</div>
		));
	};

	return (
		<div className="about-me-container screen-container fade-in" id={props.id || ""}>
			<div className="about-me-parent">
				<ScreenHeading title={'About Me'} subHeading={'why Choose Me?'} />
				<div className="about-me-card">
					<div className="about-me-profile"></div>
					<div className="about-me-details">
						<span className="about-me-description">
							{SCREEN_CONSTSANTS.description}
						</span>
						<div className="about-me-highlights">
							<div className="highlight-heading">
								<span>{SCREEN_CONSTSANTS.highlights.heading}</span>
							</div>
							{renderHighlight()}
						</div>
						<div className="about-me-options">
							<button
								className="btn primary-btn"
								onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
							>
								Hire Me
							</button>
							<a href="Haseeb_Resume_Full-Stack.pdf" download="Haseeb_Resume_Full-Stack.pdf">
								<button className="btn highlighted-btn">Get Resume</button>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

