import React from 'react';
import Sidebar from '../contact/Sidebar';

import AboutPic from '../../assets/img/about.png';

export default () => (
	<div className="container">
		<div className="row">
			<div className="col-md-9">
				<h2 className="pb-20">About Me</h2>
				<div className="row">
					<div className="col-lg-6">
						<div className="about-img">
							<img className="about-img" src={AboutPic} onError={ i => i.target.style.display = "none" } alt="Cora Mylene"/>
						</div>
					</div>
					<div className="col-lg-6">
						<p>I had the great opportunity to learn to tattoo under the tutelage of Michael Norris, the owner of Hub Tattoo in Austin, TX. </p>
						<p>I finished my apprenticeship at the end of 2014 and began my full-time tattooing career in 2015. I have been very fortunate with my career thus far and have had the pleasure to tattoo amazing people who have supported me for a while, and some since the beginning of my career.</p>
						<p>I enjoy getting to know people and building a strong clientele with those that I work with. My favorite part of tattooing is getting to be a part of people's personal growth and expression and I am very grateful for the trust that my clients have given me!</p>
					</div>
				</div>
			</div>
			<div className="col-md-3 desktop-only">
				<Sidebar subject="Booking%20Request"/>
			</div>
		</div>
	</div>
);