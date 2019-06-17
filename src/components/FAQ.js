import React, { Component } from 'react';

import faqs from '../resources/faq.json';

export default class FAQ extends Component {
	render(){
		return(
			<div className="container">
				<h2>Frequently Asked Questions</h2>
				<br/>
				<ul className="list-plain">
					{faqs.map( faq => (
						<li key={faq.question} className="faq-list">
							<strong><em>{faq.question}</em></strong>
							<br/>
							{faq.answer}
						</li>
					))}
				</ul>
				<br/>
				<p>
					<em>I hope this has helped to answer any/most of your questions. Please feel free to ask me any unanswered questions via email. Thank you for taking the time to read this!</em>
				</p>
			</div>
		)
	}
}