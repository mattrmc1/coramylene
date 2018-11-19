import React, { Component } from 'react';
import { 
	Element, 
	scroller, 
	animateScroll as scroll
} from 'react-scroll';

import Booking from './Booking';
import Info from './Info';
import Inquiries from './Inquiries';

export default class Contact extends Component {

	componentDidMount(){
		let pathname = window.location.pathname;
		if (pathname.includes('booking'))
			this.scrollToBooking();
		else if (pathname.includes('inquiries'))
			this.scrollToInquiries();
		else
			this.scrollToTop();
	}

	scrollToTop = () => {
		scroll.scrollToTop({
		  duration: 1000,
		  delay: 100,
		  smooth: true
		})
	}

	scrollToBooking = () => {
		scroller.scrollTo('Element1', {
		  duration: 1000,
		  delay: 100,
		  smooth: true
		})
	}

	scrollToInquiries = () => {
		scroller.scrollTo('Element2', {
		  duration: 1500,
		  delay: 100,
		  smooth: true
		})
	}

	render(){
		return(
			<div>
				<Info/>
				<Element name="Element1">
					<div style={{background: "red", height: 400}}>
						<Booking/>
					</div>
				</Element>
				<Element name="Element2">
					<div style={{background: "blue", height: 800}}>
						<Inquiries />
					</div>
				</Element>
			</div>
		)
	}
}