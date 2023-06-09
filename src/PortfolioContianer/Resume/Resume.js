import React, { useState, useEffect } from 'react'
import ScreenHeading from '../../Utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../Utilities/ScrollService'
import Animations from '../../Utilities/Animation'
import "./Resume.css";

export default function Resume(props) {
	/* STATES */
	const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
	const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

	let fadeInScreenHandler = (screen) => {
		if (screen.fadeInScreen !== props.id) return;
		Animations.animations.fadeInScreen(props.id);
	};
	const fadeInSubscription =
		ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

	/* REUSABLE MINOR COMPONENTS */
	const ResumeHeading = (props) => {
		return (
			<div className="resume-heading">
				<div className="resume-main-heading">
					<div className="heading-bullet"></div>
					<span>{props.heading ? props.heading : ""}</span>
					{props.fromDate && props.toDate ? (
						<div className="heading-date">
							{props.fromDate + "-" + props.toDate}
						</div>
					) : (
						<div></div>
					)}
				</div>
				<div className="resume-sub-heading">
					<span>{props.subHeading ? props.subHeading : ""}</span>
				</div>
				<div className="resume-heading-description">
					<span>{props.description ? props.description : ""}</span>
				</div>
				{props.link &&
					<div className="resume-heading-description">
						<span><a href={props.link ? props.link : ''} target='_blank' rel="noreferrer"  > Poject Link </a></span>
					</div>}
			</div >
		);
	};

	/* STATIC RESUME DATA FOR THE LABELS*/
	const resumeBullets = [
		{ label: "Education", logoSrc: "education.svg" },
		{ label: "Work History", logoSrc: "work-history.svg" },
		{ label: "Programming Skills", logoSrc: "programming-skills.svg" },
		{ label: "Projects", logoSrc: "projects.svg" },
		{ label: "Interests", logoSrc: "interests.svg" },
	];

	//here we have
	const programmingSkillsDetails = [
		{ skill: "JavaScript", ratingPercentage: 85 },
		{ skill: "React JS", ratingPercentage: 85 },
		{ skill: "React Redux", ratingPercentage: 85 },
		{ skill: "Express JS", ratingPercentage: 89 },
		{ skill: "Node JS", ratingPercentage: 89 },
		{ skill: "Mongo Db", ratingPercentage: 70 },
		{ skill: "HTML", ratingPercentage: 80 },
		{ skill: "CSS", ratingPercentage: 80 },
		{ skill: "Git & GitHub", ratingPercentage: 85 },
		{ skill: "Bootstrap ", ratingPercentage: 85 },
	];

	const projectsDetails = [
		{
			title: "Finecart (Saas Platform) ",
			duration: { fromDate: "2020", toDate: "2023" },
			description:
				"An ecommerce application designed to sell products online Based on marketPlace",
			subHeading:
				"Technologies Used:  React Js, Mongo DB, Express Js, Node Js, Redux.",
			projectLink: 'https://app.retailcenter.io'
		},
		{
			title: "Personal Portfolio Website",
			duration: { fromDate: "2022", toDate: "2023" },
			description:
				"A Personal Portfolio website to showcase all my details and projects at one place.",
			subHeading: "Technologies Used: React JS, Bootsrap",
			projectLink: 'https://haseeb-creator.github.io/portfolio/'
		},
		{
			title: "Drum Kit",
			duration: { fromDate: "2020", toDate: "2021" },
			description:
				"You can play music either by clicking on a key or by clicking on the screen.",
			subHeading:
				"Technologies Used: html, Css, Javascript.",
			projectLink: "https://haseeb-creator.github.io/Drum-Kit/",
		},
	];

	const resumeDetails = [
		<div className="resume-screen-container" key="education">
			<ResumeHeading
				heading={"Bachelor of Engineering"}
				subHeading={"CMR Institute of Technology   -  Bengaluru"}
				fromDate={"2016"}
				toDate={"2019"}
			/>

			<ResumeHeading
				heading={" Pre-University Course (PUC)"}
				subHeading={"Shaheen Pu college   -   Bidar"}
				fromDate={"2014"}
				toDate={"2015"}
			/>

			<ResumeHeading
				heading={"High School "}
				subHeading={"Al-Ameen -  Chitguppa"}
				fromDate={"2010"}
				toDate={"2013"}
			/>
		</div>,

		/* WORK EXPERIENCE */
		<div className="resume-screen-container" key="work-experience">
			<div className="experience-container">
				<ResumeHeading
					heading={"Mufeed Products & Services Pvt Ltd"}
					subHeading={"FULL STACK DEVELOPER "}
					fromDate={"2021"}
					toDate={"Present"}
				/>
				<div className="experience-description">
					<span className="resume-description-text">
						Currently Working on a PinCode Based E-Commerce SAAS Platform Build on MERN-Stack Technology hosted Front-End on S3 Bucket and Backend on GKE Cluster Inside Google Cloud, CI/CD Pipe-Line Using Jenkins.
						Live web application link : <span> <a href="http://app.retailcenter.io" target='_blank' rel="noreferrer">www.finecart.in </a> </span>   fully responsive.
					</span>
				</div>
				<div className="experience-description">
					<span className="resume-description-text">
						- Developed an ecommerce website for client with the dashboard for
						managing the products, users, etc..
					</span>
					<br />
					<span className="resume-description-text">
						-Integrating with APIs and services like Google API for location detection and Firebase services like cloud messaging.
					</span>
					<br />
					<span className="resume-description-text">
						- Integrated the web app with backend services to create new user
						onboarding application with dynamic form content.{" "}
					</span>
					<br />
					<span className="resume-description-text">
						- I stretch my mental capacity to develope UI as per the given
						designs.
					</span>
					<br />
				</div>
			</div>
		</div>,

		/* PROGRAMMING SKILLS */
		<div
			className="resume-screen-container programming-skills-container"
			key="programming-skills"
		>
			{programmingSkillsDetails.map((skill, index) => (
				<div className="skill-parent" key={index}>
					<div className="heading-bullet"></div>
					<span>{skill.skill}</span>
					<div className="skill-percentage">
						<div
							style={{ width: skill.ratingPercentage + "%" }}
							className="active-percentage-bar"
						></div>
					</div>
				</div>
			))}
		</div>,

		/* PROJECTS */
		<div className="resume-screen-container" key="projects">
			{projectsDetails.map((projectsDetails, index) => (
				<ResumeHeading
					key={index}
					heading={projectsDetails.title}
					subHeading={projectsDetails.subHeading}
					description={projectsDetails.description}
					link={projectsDetails.projectLink}
					fromDate={projectsDetails.duration.fromDate}
					toDate={projectsDetails.duration.toDate}
				/>
			))}
		</div>,

		/* Interests */
		<div className="resume-screen-container" key="interests">
			<ResumeHeading
				heading="Music"
				description="Listening to soothing music is something i can never compromise with, skimming through Spotify's pop songs charts is at times the best stress reliever that i can get my hands on."
			/>
			<ResumeHeading
				heading="Competitive Gaming"
				description="I like to challenge my reflexes a lot while competing in Cricket games, pushing the rank and having interactive gaming sessions excites me the most."
			/>
			<ResumeHeading
				heading="Teaching"
				description="Apart from being a tech enthusiast and a code writer, i also love to teach people what i know simply because i believe in sharing."
			/>
		</div>,
	];

	const handleCarousal = (index) => {
		let offsetHeight = 360;

		let newCarousalOffset = {
			style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
		};

		setCarousalOffsetStyle(newCarousalOffset);
		setSelectedBulletIndex(index);
	};

	const getBullets = () => {
		return resumeBullets.map((bullet, index) => (
			<div
				onClick={() => handleCarousal(index)}
				className={
					index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
				}
				key={index}
			>
				<img
					className="bullet-logo"
					src={require(`../../assets/Resume/${bullet.logoSrc}`)}
					alt="oops,,,no internet connection"
				/>
				<span className="bullet-label">{bullet.label}</span>
			</div>
		));
	};

	const getResumeScreens = () => {
		return (
			<div
				style={carousalOffsetStyle.style}
				className="resume-details-carousal"
			>
				{resumeDetails.map((ResumeDetail) => ResumeDetail)}
			</div>
		);
	};

	useEffect(() => {
		return () => {
			//	UNSUBSCRIBE THE SUBSCRIPTIONS
			fadeInSubscription.unsubscribe();
		};
	}, [fadeInSubscription]);

	return (
		<div
			className="resume-container screen-container fade-in"
			id={props.id || ""}
		>
			<div className="resume-content">
				<ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
				<div className="resume-card">
					<div className="resume-bullets">
						<div className="bullet-container">
							<div className="bullet-icons"></div>
							<div className="bullets">{getBullets()}</div>
						</div>
					</div>

					<div className="resume-bullet-details">{getResumeScreens()}</div>
				</div>
			</div>
		</div>
	);
};



