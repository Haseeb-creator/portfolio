import React from "react";
import ScrollService from "../../Utilities/ScrollService";
import "./FooterButton.css";


export default function FooterButton(props) {

	let currentYear = new Date().getFullYear();

	return (
		<>
			<div className="main-footer-container">
				<div className="main-footer-content">
					<span> 👋  &nbsp; Mohammed Haseeb | {currentYear} </span>
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

			<div className="scroll-container">
				<button
					className="btn-scroll"
					onClick={() => ScrollService.scrollHandler.scrollToHome()}
				>
					<i className="fa fa-arrow-up"></i>
				</button>
			</div>	</>
	);
}
