import React, { Component } from 'react';

export default class Sidebar extends Component {
	render(){
		return(
			<div>
				<h3>Cora Mylene Tattoos</h3>
				<hr/>
				<br/>
				<ul className="list-plain">
					<li>
						<a href={`mailto:coramylene@gmail.com?Subject=${this.props.subject}`}>
							<i className="fas fa-envelope" style={{paddingRight: ".5rem"}}/>
							coramylene@gmail.com
						</a>
					</li>
					<li>
						<a target="_blank" href="https://www.instagram.com/cora_mylene/">
							<i className="fab fa-instagram" style={{paddingRight: ".5rem"}}/>
							@cora_mylene
						</a>
					</li>
				</ul>
				<br/>
				<hr/>
				<ul className="list-plain">
					<li style={{display: "flex"}}>
						<i className="fas fa-map-marker-alt" style={{paddingRight: ".5rem", paddingTop: '.2rem'}}/>
						<span>
							Art Realm
							<br/>
							1806 W. Anderson Ln
							<br/>
							Austin, TX 78757
						</span>
					</li>
				</ul>
			</div>
		)
	}
}