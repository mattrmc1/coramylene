import React from 'react';

export default ({ subject }) => (
	<div>
		<h3>Cora Mylene Tattoos</h3>
		<hr/>
		<ul className="list-plain">
			<li>
				<a href={`mailto:coramylene@gmail.com?Subject=${subject}`}>
					<i className="fas fa-envelope" style={{paddingRight: ".5rem"}}/>coramylene@gmail.com
				</a>
			</li>
			<li>
				<a target="_blank" href="https://www.instagram.com/cora_mylene/" rel="noopener noreferrer">
					<i className="fab fa-instagram" style={{paddingRight: ".5rem"}}/>@cora_mylene
				</a>
			</li>
		</ul>
		<hr/>
		<ul className="list-plain">
			<li style={{display: "flex"}}>
				<i className="fas fa-map-marker-alt" style={{paddingRight: ".5rem", paddingTop: '.2rem'}}/>
				<span>
					Art Realm<br/>
					1806 W. Anderson Ln<br/>
					Austin, TX 78757
				</span>
			</li>
		</ul>
	</div>
);