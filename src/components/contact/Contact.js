import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Contact extends Component {
	render(){
		return(
			<div className="text-center">
				<h1 className="text-uppercase">Cora Mylene Tattoos</h1>
				<hr style={{width: "35%"}}/>
				<br/>
				<h3>
					<a href={`mailto:coramylene@gmail.com?Subject=${this.props.subject}`}>
						<i className="fas fa-envelope contact-icon"/>
						coramylene@gmail.com
					</a>
					<br/>
					<a target="_blank" href="https://www.instagram.com/cora_mylene/">
						<i className="fab fa-instagram contact-icon"/>
						@cora_mylene
					</a>
				</h3>
				<br/>
				<h3>
					Art Realm
					<br/>
					1806 W. Anderson Ln
					<br/>
					Austin, TX 78757			
				</h3>
				<br/>
				<hr style={{width: "35%"}}/>
				<div className="row contact-links-container">
					<div className="col-6">
						<Link
							className="contact-link"
							to="/contact/booking"
						>
							Booking&nbsp;<small><i className="fas fa-arrow-right"/></small>
							<hr className="contact-divider"/>
						</Link>
					</div>
					<div className="col-6">
						<Link
							className="contact-link"
							to="/contact/inquiries"
						>
							Inquiries&nbsp;<small><i className="fas fa-arrow-right"/></small>
							<hr className="contact-divider"/>
						</Link>
					</div>
				</div>
			</div>
		)
	}
}