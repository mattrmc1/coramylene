import React from 'react';
import { Link } from 'react-router-dom';

export default ({ subject }) => (
	<div className="text-center">
		<h1 className="text-uppercase">Cora Mylene Tattoos</h1>
		<hr style={{width: "35%"}}/>
		<h3 style={{padding: "20px 0"}}>
			<a href={`mailto:coramylene@gmail.com?Subject=${subject}`}>
				<i className="fas fa-envelope contact-icon"/>coramylene@gmail.com
			</a>
			<br/>
			<a target="_blank" href="https://www.instagram.com/cora_mylene/" rel="noopener noreferrer">
				<i className="fab fa-instagram contact-icon"/>@cora_mylene
			</a>
		</h3>
		<h3 style={{ paddingBottom: 20 }}>
			Art Realm<br/>
			1806 W. Anderson Ln<br/>
			Austin, TX 78757			
		</h3>
		<hr style={{width: "35%"}}/>
		<div className="row contact-links-container">
			<div className="col-6">
				<Link className="contact-link" to="/contact/booking">
					Booking&nbsp;<small><i className="fas fa-arrow-right"/></small>
					<hr className="contact-divider"/>
				</Link>
			</div>
			<div className="col-6">
				<Link className="contact-link" to="/contact/inquiries">
					Inquiries&nbsp;<small><i className="fas fa-arrow-right"/></small>
					<hr className="contact-divider"/>
				</Link>
			</div>
		</div>
	</div>
);