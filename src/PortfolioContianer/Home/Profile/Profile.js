import React from 'react'
import Typical from "react-typical"
import ScrollService from '../../../Utilities/ScrollService'
import './Profile.css'

const Profile = () => {
	return (
		<div className="profile-container">
			<div className="profile-parent">
				<div className="profile-details">
					<div className="colz">
						<div className="colz-icon">
							<a href="https://github.com/Haseeb-creator" target={'_blank'} rel="noreferrer">
								<i className="fa fa-github"></i>
							</a>
							<a href="https://www.linkedin.com/in/haseeb12/" target={'_blank'} rel="noreferrer">
								<i className="fa fa-linkedin-square" ></i>
							</a>
							<a href="https://www.instagram.com/md_haseeb_/" target={'_blank'} rel="noreferrer">
								<i className="fa fa-instagram"></i>
							</a>
							<a href="https://api.whatsapp.com/send?phone=919902416190" target={'_blank'} rel="noreferrer">
								<i className="fa fa-whatsapp"></i>
							</a>
						</div>
					</div>

					<div className="profile-details-name">
						<span className="primary-text">
							Hello, I'M <span className="highlighted-text">Haseeb</span>
						</span>
					</div>
					<div className="profile-details-role">
						<span className="primary-text">
							<h1>
								<Typical
									loop={Infinity}
									steps={[
										"React js Developer 🏆",
										1000,
										"front-end 💖",
										1000,
										"Mern Stack 🎯",
										1000,
										"front-end developer",
										1000,
										"front-end",
										1000,
									]} />
							</h1>
							<span className="profile-role-tagline">
								“Experience is the name everyone gives to their mistakes.” – Oscar Wilde
							</span>
						</span>
					</div>
					<div className="profile-options">
						<button className="btn primary-btn"
							onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
						>Hire Me</button>
						<a href="Haseeb_Resume_Full-Stack.pdf" download={'Haseeb_Resume_Full-Stack.pdf'} >
							<button className="btn highlighted-btn">Get Resume</button>
						</a>
					</div>
				</div>
				<div className="profile-picture">
					<div className="profile-picture-background">
					</div>
				</div>
			</div>

		</div>
	)
}

export default Profile