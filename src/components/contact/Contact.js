import React, { Component } from 'react';

export default class Contact extends Component {
	render(){
		return(
			<div className="text-center">
				<h1 className="text-uppercase">Cora Mylene Tattoos</h1>
				<hr style={{width: "35%"}}/>
				<br/>
				<h3>
					<a href={`mailto:coramylene@gmail.com?Subject=${this.props.subject}`}>
						<i className="fas fa-envelope" style={{paddingRight: "1rem"}}/>
						coramylene@gmail.com
					</a>
					<br/><br/>
					<a target="_blank" href="https://www.instagram.com/cora_mylene/">
						<i className="fab fa-instagram" style={{paddingRight: ".5rem"}}/>
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
			</div>
		)
	}
}