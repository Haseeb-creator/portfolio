import React, { useState, useRef } from 'react'
import Typical from "react-typical";
import { toast } from "react-toastify";
import imgBack from "../../img/ContactImg/mailz.jpeg";
import load1 from "../../img/ContactImg/load2.gif"
import ScreenHeading from '../../Utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../Utilities/ScrollService';
import Animations from '../../Utilities/Animation';
import FooterButton from '../FooterButton/FooterButton';
import emailjs from '@emailjs/browser';
import "./ContactMe.css";

export default function ContactMe(props) {

	let fadeInScreenHandler = (screen) => {
		if (screen.fadeInScreen !== props.id) return;
		Animations.animations.fadeInScreen(props.id);
	};
	// eslint-disable-next-line
	const fadeInSubscription =
		ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [banner, setBanner] = useState("");
	const [bool, setBool] = useState(false);

	const handleName = (e) => {
		setName(e.target.value);
	};
	const handleEmail = (e) => {
		setEmail(e.target.value);
	};
	const handleMessage = (e) => {
		setMessage(e.target.value);
	};
	console.log(name);


	/* const submitForm = async (e) => {
		e.preventDefault();
		try {
			let data = {
				name,
				email,
				message,
			};
			setBool(true);
			const res = await axios.post(`/contact`, data);
			if (name.length === 0 || email.length === 0 || message.length === 0) {
				setBanner(res.data.msg);
				toast.error(res.data.msg);
				setBool(false);
			} else if (res.status === 200) {
				setBanner(res.data.msg);
				toast.success(res.data.msg);
				setBool(false);

				setName("");
				setEmail("");
				setMessage("");
			}
		} catch (error) {
			console.log(error);
		}
	};
	*/
	// assuming top-level await for brevity

	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();
		setBool(true);

		if (name.length === 0 || email.length === 0 || message.length === 0) {
			setBanner("Please Fill All The Fields!");
			toast.error("Please Fill All The Fields!");
			setBool(false);
		}
		else {
			emailjs.sendForm('service_g30sn6v', 'template_0y954fj', form.current, 'qJoscxKOX4w1Ce771')
				.then((result) => {
					if (result.text === 'OK') {
						setBanner("Thank You For Contacting Haseeb!.");
						toast.success("Thank You For Contacting Haseeb!.");
						setBool(false);
						setName("");
						setEmail("");
						setMessage("");
					}
					console.log(result.text);
				}, (error) => {
					if (name.length === 0 || email.length === 0 || message.length === 0) {
						setBanner("Please Fill All The Fields!");
						toast.error("Please Fill All The Fields!");
						setBool(false);
					}
					console.log(error.text);
				});
		}
	};


	return (
		<div className="main-container fade-in" id={props.id || ""}>
			<ScreenHeading subHeading={"Lets Keep In Touch"} title={"Contact Me"} />
			<div className="central-form">
				<div className="col">
					<h2 className="title">
						<Typical loop={Infinity} steps={["Get In Touch 📧", 1200, "Email me 📧",
							1200,]} />
					</h2>{" "}
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
				<div className="back-form">
					<div className="img-back">
						<h4>Send Your Email Here!</h4>
						<img src={imgBack} alt=" not found" />
					</div>
					<form ref={form} onSubmit={sendEmail}>
						<p>{banner}</p>
						<label htmlFor="name">Name</label>
						<input type="text" name="user_name" onChange={handleName} value={name} />

						<label htmlFor="email">Email</label>
						<input type="email" name="user_mail" onChange={handleEmail} value={email} />

						<label htmlFor="message">Message</label>
						<textarea type="text" name="message" onChange={handleMessage} value={message} />

						<div className="send-btn">
							<button type="submit">
								send
								<i className="fa fa-paper-plane" />
								{bool ? (
									<b className="load">
										<img src={load1} alt="not responding" />
									</b>
								) : (
									""
								)}
							</button>
						</div>
					</form>
				</div>
			</div>
			<FooterButton />
		</div>
	)
}
