import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Sidebar from './Sidebar'

export default class Inquiries extends Component {

	render(){
		return(
			<div className="container">
				<div className="row">
					<div className="col-md-9">
						<h2 className="pb-20">Inquiries</h2>
						<p>When inquiring about a tattoo, please give me the following information in your email:</p>
						<ul>
							<li>A brief description of your tattoo concept and your style preference if you have one. </li>
							<li>Desired size of tattoo and location on body (include all options if you are flexible on placement and/or size)</li>
							<li>Reference photos (if any) and short descriptions identifying what you like/dislike about the image so that I can understand what you like as best as I can. </li>
							<li>Availability. Please note that weekends are booked the fastest, so include days/times that work for you during the week as well. I work Wednesday - Saturday and have 2 slots per day, noon and 5 pm. Please only give availability that falls within those days/times.</li>
						</ul>
						<p>
							<strong>Once that is done:</strong>
						</p>
						<p>
							I will get back to you  to set up the appointment date(s) that would work for both of us. Once we agree on a date/dates, I will send you a PayPal invoice for the $100 non-refundable deposit payable by debit or credit card. I do not take cash for deposits. Until the deposit is received, your appointment is not guaranteed or held. 
Once the date and deposit is set up, I will let you know if I feel an in-person consultation is needed. I only book consultations with those that I need more clarification from, and most of the time corresponding via email about the tattoo concept/design works just as well and saves you a trip!
						</p>
						<p>
							For additional info, please visit my <Link to="/faq" className="text-link">FAQ</Link> page. 
						</p>
					</div>
					<div className="col-md-3 desktop-only">
						<Sidebar subject="Tattoo%20Inquiry"/>
					</div>
				</div>
			</div>
		)
	}
}