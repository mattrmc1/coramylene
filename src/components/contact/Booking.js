import React, { Component } from 'react';
import { Link } from 'react-static';
import moment from 'moment';

import Sidebar from './Sidebar'

export default class Booking extends Component {

	render(){
		return(
			<div className="container">
				<div className="row">
					<div className="col-md-9">
						<h2 className="pb-20">Booking</h2>
						<p>My books open 4 times a year on the following dates:</p>
						<ul>
							<li>January 15th</li>
							<li>Aprtil 15th</li>
							<li>July 15th</li>
							<li>October 15th</li>
						</ul>
						<p>
							These booking dates are the starting dates in which I will be responding to emails and setting appointments with new clients. Once I have booked out for that quarter, I will close my books. If you do not get a personal email reply it’s because I have booked all available appointments and/or I’m not the right fit for your tattoo concept.
						</p>
						<p>
							Please note that I will not be reading tattoo inquiry emails until the next booking period. I will also not be reading old inquiries, so if you are serious please wait until a booking date and shoot me an email on or shortly after that date. 
						</p>
						<p>
							Please visit <Link to="/inquiries" className="text-link">Inquiries</Link> to see what information I will need from you for your inquiry.
							<br/>
							For all other questions please visit my <Link to="/faq" className="text-link">FAQ</Link> page. 
						</p>
						{moment().isBefore('2019-1-1') && (
							<p>
							***For the remaining of 2018, I am only booking people that have gotten a reply from me saying that I have put them on my waiting list. If you and I have not talked about this waiting list, please get back to me starting January 15th.***
						</p>
						)}
					</div>
					<div className="col-md-3 desktop-only">
						<Sidebar subject="Booking%20Request"/>
					</div>
				</div>
			</div>
		)
	}
}